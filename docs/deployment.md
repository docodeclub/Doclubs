# Deployment and enquiry setup

## Hosting

Production uses Vercel project `docode/doclubs`, connected to `docodeclub/Doclubs` on GitHub. Pushes to `main` deploy production; Vercel manages previews and HTTPS. Use the Next.js preset, repository root, and normal `pnpm build` command. Do not set `GITHUB_PAGES` on Vercel: production includes the enquiry server route and Next.js image optimisation. Enquiry delivery remains disabled until the settings below are supplied.

Runtime: Node 22+. Install with `pnpm install --frozen-lockfile`; build with `pnpm build`. For a local production check use `pnpm start` (loopback port 3000). Keep preview deployments private or configure host-level noindex until approved for public launch.

The canonical address is `https://www.doclubs.co.uk`. Squarespace remains the registrar/DNS provider. Both domain variants belong to the Vercel project, with the apex redirecting to www. Use the DNS values shown by Vercel, preserving unrelated email-security and Domain Connect records. GitHub Pages deployment is retired. Do not alter Docode, DoSport or DoChess domains.

Squarespace records configured on 20 October 2026: `@` A `216.150.1.1`; `www` CNAME `ff4e37f8cc00b46b.vercel-dns-016.com`, both with four-hour TTL. Vercel redirects the apex to www using HTTP 308. The previous GitHub Pages endpoint is retained temporarily for cached DNS; its workflow is disabled and no longer runs on pushes.

## Required before enabling enquiries

Copy `.env.example` to `.env.local` for development, or use the hosting provider's secret settings. Never commit secrets.

| Setting | Purpose |
| --- | --- |
| `ENQUIRY_WEBHOOK_URL` | Trusted HTTPS endpoint that accepts and durably stores or delivers an enquiry |
| `ENQUIRY_WEBHOOK_SECRET` | Strong shared secret for HMAC verification |
| `LEGAL_ENTITY` | Confirmed operator/data controller name; not an invented company |
| `PRIVACY_EMAIL` | Confirmed privacy contact |
| `ENQUIRY_RETENTION` | Confirmed plain-English retention period/rule |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional public Do Clubs enquiry address |
| `NEXT_PUBLIC_CONTACT_PHONE` | Optional public Do Clubs telephone |

The first five settings gate form availability. Set them at build and runtime, then rebuild/redeploy; some pages are pre-rendered. Confirm the privacy notice against the actual operator, processor, hosting region, international transfer arrangements and retention practice before enabling. Configure spam/rate protection at the hosting edge for POST `/api/enquiries` (for example 5 submissions per minute per visitor) before public launch. The route includes a honeypot, origin check, allowlisted fields, bounded body length and ten-second delivery timeout; these do not replace distributed edge rate limiting.

## Webhook contract

POST JSON: `{ id, timestamp, source: "doclubs", enquiry: { route, name, email, phone, school, jobTitle, arrangement, message, programmes } }`.

Headers include `X-DoClubs-Signature` (hex HMAC SHA-256 of the exact raw JSON request body using the shared secret) and `Idempotency-Key` (the enquiry ID). Verify signature with constant-time comparison, reject stale timestamps and deduplicate by ID. Treat all content as plain text or escape it if rendering HTML. Use the sender's email only as a validated reply-to address, never as the email From identity. Restrict access to the inbox and avoid logging full message bodies.

Respond 2xx only after durable receipt/delivery acceptance. The UI says "received", not "email delivered". Non-2xx and network/timeout failures produce an honest failure message. On an ambiguous timeout the user may retry; your processor should consider duplicate content in addition to ID, as a new form submission receives a new ID. A valid but unconfigured request receives 503 with no persistence. No email service credentials or recipient mailbox were supplied, so actual delivery has not been performed or tested.

## Release checks

1. `pnpm test`, `pnpm typecheck`, `pnpm build`.
2. Run production server and check all pages, images, sitemap, robots and social image.
3. Confirm public contact details, legal entity, privacy text and hosting log/retention practices.
4. Configure delivery and edge rate protection; send a controlled test to your own inbox and confirm receipt and failure handling.
5. Verify brand launch states. Only Docode is live in the delivered configuration.
6. Connect domain only after explicit owner authorisation. Verify HTTPS and canonical redirect.
7. If analytics, embeds or optional cookies are added later, reassess privacy and consent before enabling them.
