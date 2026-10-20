import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { brands } from "@/config/brands";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/clubs",
    "/schools",
    "/parents",
    "/about",
    "/contact",
    "/privacy",
    ...brands.map((b) => `/clubs/${b.id}`),
  ].map((p) => ({
    url: site.url + p,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}

export const dynamic = "force-static";
