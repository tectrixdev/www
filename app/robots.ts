import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 60,
    },
    sitemap: "https://www.tectrix.dev/sitemap.xml",
    host: "https://www.tectrix.dev",
  };
}
