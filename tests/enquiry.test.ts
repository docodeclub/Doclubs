import test from "node:test";
import assert from "node:assert/strict";
import { validateEnquiry } from "../lib/enquiry.ts";
import { brands, brandHref } from "../config/brands.ts";
const valid = {
  route: "school",
  name: "Test Person",
  email: "test@example.com",
  school: "Example School",
  jobTitle: "Coordinator",
  message: "A synthetic test enquiry.",
  programmes: ["Docode"],
  arrangement: "Not sure yet",
};
test("accepts a school enquiry and normalises whitespace", () => {
  const r = validateEnquiry({ ...valid, name: " Test Person " });
  assert.equal(r.ok, true);
  if (r.ok) assert.equal(r.value.name, "Test Person");
});
test("rejects incomplete school enquiries", () => {
  assert.equal(validateEnquiry({ ...valid, school: "" }).ok, false);
  assert.equal(validateEnquiry({ ...valid, jobTitle: "" }).ok, false);
});
test("validates email and message", () => {
  assert.equal(validateEnquiry({ ...valid, email: "broken" }).ok, false);
  assert.equal(validateEnquiry({ ...valid, message: "Short" }).ok, false);
});
test("rejects untrusted choices and oversized fields", () => {
  for (const change of [
    { programmes: ["Unknown"] },
    { programmes: "Docode" },
    { message: "a".repeat(4001) },
    { route: "other" },
    { arrangement: "Free club" },
    { name: 42 },
  ])
    assert.equal(validateEnquiry({ ...valid, ...change }).ok, false);
});
test("general enquiries do not need a school", () => {
  assert.equal(
    validateEnquiry({ ...valid, route: "general", school: "", jobTitle: "" })
      .ok,
    true,
  );
});
test("brand links follow launch status", () => {
  for (const b of brands) {
    assert.equal(brandHref({ ...b, launchStatus: "coming-soon" }), `/clubs/${b.id}`);
    assert.equal(
      brandHref({ ...b, launchStatus: "live" }),
      b.externalWebsiteUrl,
    );
  }
});
