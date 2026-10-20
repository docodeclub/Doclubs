# Do Clubs

Deployment: GitHub Pages, custom domain `www.doclubs.co.uk`. See [GitHub Pages setup](docs/github-pages.md). The server-host instructions below remain available for future enquiry integration.

A complete Next.js website for the Do Clubs umbrella brand, based on a live visual audit of Docode. This project is separate from Docode and does not modify any production website or DNS.

## Run locally

Requires Node.js 22+ and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000. The dev server is bound to loopback. For production:

```sh
pnpm test
pnpm build
pnpm start
```

On this Mac, the bundled Node/pnpm are available by adding these directories to PATH if no system Node is installed:

- `/Users/lukecurrie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin`
- `/Users/lukecurrie/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback`

## Pages

Home, Our Clubs, For Schools, For Parents, About Us, Contact, Privacy & Cookies; programme pages at `/clubs/docode`, `/clubs/dosport`, `/clubs/dochess`; accessible error, loading and 404 states. Metadata, social image, icon, sitemap and robots routes are included.

## Editing

- `config/brands.ts`: names, domains, descriptions, accent colours, logos, launch states, activity lists, audience wording and booking links.
- `config/site.ts`: canonical address and configurable contact/legal details.
- `components/`: reusable header, footer, programme artwork, cards, buttons and enquiry form.
- `app/globals.css`: design tokens, component styles and responsive layouts; Tailwind CSS 4 is also configured.
- `lib/enquiry.ts`: shared server validation.
- `app/api/enquiries/route.ts`: signed HTTPS enquiry integration, with honest unavailable/error states.

To launch a specialist brand, update its `launchStatus` to `live`, verify its `externalWebsiteUrl`, set its `bookingUrl` if applicable, and supply its approved logo and audience information. Cards, footer and programme pages automatically switch to the live website. Review any editorial references to upcoming brands in home/about/schools/parents copy as part of the launch. Adding a brand to the array creates cards, club overview content, a programme page and sitemap entry; add its bespoke artwork. Enquiry options and validation also use the brand array.

## Enquiries and launch readiness

Forms are intentionally disabled until a trusted delivery endpoint and legal/privacy details are supplied. They never claim a submission was sent when delivery is not configured. Existing Docode enquiries link to Docode's verified contact page. No Do Clubs email, phone, address or legal entity has been invented.

See [deployment instructions](docs/deployment.md), [reference audit](docs/brand-audit.md), [design system](docs/design-system.md) and [completion report](docs/completion-report.md).
