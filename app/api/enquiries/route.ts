import { NextRequest, NextResponse } from "next/server";
import { createHmac, randomUUID } from "node:crypto";
import { validateEnquiry } from "@/lib/enquiry";
import { enquiriesEnabled } from "@/config/site";
export const runtime = "nodejs";
const reply = (message: string, status: number) =>
  NextResponse.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  // Next may normalise loopback URLs to localhost; retain the actual request host.
  const requestOrigin = `${request.nextUrl.protocol}//${request.headers.get("host") || request.nextUrl.host}`;
  if (!origin || origin !== requestOrigin)
    return reply("Please submit the form from this website.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply("Use the website enquiry form.", 415);
  if (Number(request.headers.get("content-length") || 0) > 16000)
    return reply("Your enquiry is too long.", 413);
  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("Please provide enquiry details.", 400);
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > 16000) {
        await reader.cancel();
        return reply("Your enquiry is too long.", 413);
      }
      chunks.push(value);
    }
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply("Please check your enquiry and try again.", 400);
  }
  if (
    input &&
    typeof input === "object" &&
    "website" in input &&
    (input as { website: unknown }).website
  )
    return reply("The enquiry could not be accepted.", 400);
  const parsed = validateEnquiry(input);
  if (!parsed.ok) return reply(parsed.message, 400);
  if (!enquiriesEnabled())
    return reply(
      "Online enquiries are not open yet. Your details have not been sent or saved.",
      503,
    );
  const endpoint = process.env.ENQUIRY_WEBHOOK_URL!;
  if (!endpoint.startsWith("https://"))
    return reply(
      "The enquiry service is unavailable. Please try again later.",
      503,
    );
  const id = randomUUID();
  const timestamp = new Date().toISOString();
  const payload = JSON.stringify({
    id,
    timestamp,
    source: "doclubs",
    enquiry: parsed.value,
  });
  const signature = createHmac("sha256", process.env.ENQUIRY_WEBHOOK_SECRET!)
    .update(payload)
    .digest("hex");
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-DoClubs-Signature": signature,
        "Idempotency-Key": id,
      },
      body: payload,
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok)
      return reply(
        "We could not confirm receipt. Please try again later.",
        502,
      );
    return reply(
      "Your enquiry has been received. Thank you for getting in touch.",
      200,
    );
  } catch {
    return reply("We could not confirm receipt. Please try again later.", 502);
  }
}
