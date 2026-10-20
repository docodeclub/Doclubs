# GitHub Pages deployment

The published site uses GitHub Pages, with source in `docodeclub/Doclubs` and custom domain `www.doclubs.co.uk`. The apex `doclubs.co.uk` points to GitHub Pages too and redirects to www.

`pnpm build:pages` builds in an isolated ignored `.pages-build` folder and writes static files to `out`. It preserves the server API in the original source, but omits that endpoint from the Pages export. Images are served locally without the Next.js image server. Contact query preselection runs in the browser. GitHub Actions tests, builds and deploys on a push to `main` or manual workflow dispatch.

GitHub Pages cannot run the enquiry API. Forms are always disabled in this deployment. Activating the original integration requires a compatible server host, or a separately implemented hosted form service. Do not put webhook secrets in public JavaScript. GitHub Pages also controls response headers, so Next.js custom server headers do not apply to this static deployment.

## DNS

Squarespace remains the domain registrar/DNS provider. Required records:

- `@` A `185.199.108.153`
- `@` A `185.199.109.153`
- `@` A `185.199.110.153`
- `@` A `185.199.111.153`
- `www` CNAME `docodeclub.github.io`

The original Squarespace Defaults preset contained four apex A records (`198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145`), www CNAME `ext-sq.squarespace.com`, and an apex HTTPS record with the same IPv4 hints. These defaults must be replaced, not combined with GitHub records. Email Security TXT records and `_domainconnect` are unrelated and remain intact.

GitHub settings must reserve the custom domain before DNS changes. HTTPS issuance depends on propagated DNS and is managed by GitHub. Check Pages settings and enable Enforce HTTPS when the certificate is ready.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
