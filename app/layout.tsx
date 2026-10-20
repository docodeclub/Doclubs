import type { Metadata } from "next";
import Header from "@/components/header";
import { Footer } from "@/components/ui";
import { site } from "@/config/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Do Clubs | Discover. Learn. Play.",
    template: "%s | Do Clubs",
  },
  description:
    "Discover a growing family of specialist extracurricular clubs for primary and prep schools. Coding today, with sport and chess on the way.",
  openGraph: {
    siteName: "Do Clubs",
    locale: "en_GB",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              description:
                "A growing family of specialist extracurricular enrichment brands.",
            }),
          }}
        />
      </body>
    </html>
  );
}
