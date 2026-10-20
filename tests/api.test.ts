import test from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { NextRequest } from "next/server";
import { POST } from "../app/api/enquiries/route";
import { site } from "../config/site";
const body = {
  route: "school",
  name: "Test Person",
  email: "test@example.com",
  school: "Example School",
  jobTitle: "Coordinator",
  message: "Synthetic test; do not deliver.",
  programmes: ["Docode"],
  arrangement: "Not sure yet",
};
const req = (value: unknown = body, origin = "http://localhost:3000") =>
  new NextRequest("http://localhost:3000/api/enquiries", {
    method: "POST",
    headers: { origin, "content-type": "application/json" },
    body: JSON.stringify(value),
  });
test("enquiry endpoint rejects invalid, cross-origin and unconfigured requests", async () => {
  delete process.env.ENQUIRY_WEBHOOK_URL;
  assert.equal((await POST(req(body, "https://other.example"))).status, 403);
  assert.equal((await POST(req({}))).status, 400);
  assert.equal((await POST(req({ ...body, website: "bot" }))).status, 400);
  assert.equal(
    (await POST(req({ ...body, message: "a".repeat(17000) }))).status,
    413,
  );
  assert.equal((await POST(req())).status, 503);
});
test("enquiry endpoint signs delivery and handles upstream failure without false success", async () => {
  process.env.ENQUIRY_WEBHOOK_URL = "https://example.test/enquiries";
  process.env.ENQUIRY_WEBHOOK_SECRET = "synthetic-test-secret";
  site.legalEntity = "Synthetic test operator";
  site.privacyEmail = "privacy@example.test";
  site.retention = "Synthetic test retention";
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async (_url, options) => {
      const payload = String(options?.body);
      const headers = options?.headers as Record<string, string>;
      assert.equal(
        headers["X-DoClubs-Signature"],
        createHmac("sha256", "synthetic-test-secret")
          .update(payload)
          .digest("hex"),
      );
      assert.equal(JSON.parse(payload).enquiry.email, body.email);
      assert.ok(headers["Idempotency-Key"]);
      return new Response("{}", { status: 202 });
    };
    assert.equal((await POST(req())).status, 200);
    globalThis.fetch = async () => new Response("", { status: 500 });
    assert.equal((await POST(req())).status, 502);
    globalThis.fetch = async () => {
      throw new Error("Synthetic network failure");
    };
    assert.equal((await POST(req())).status, 502);
    process.env.ENQUIRY_WEBHOOK_URL = "http://example.test";
    assert.equal((await POST(req())).status, 503);
  } finally {
    globalThis.fetch = original;
    delete process.env.ENQUIRY_WEBHOOK_URL;
    delete process.env.ENQUIRY_WEBHOOK_SECRET;
  }
});
