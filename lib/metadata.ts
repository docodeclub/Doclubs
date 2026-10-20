import type { Metadata } from "next";
import { site } from "@/config/site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Do Clubs`,
      description,
      url: `${site.url}${path}`,
      type: "website",
      locale: "en_GB",
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}
