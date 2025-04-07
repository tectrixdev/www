import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content");
const postFiles = fs.readdirSync(postsDirectory);

const postSitemaps: MetadataRoute.Sitemap = await Promise.all(
  postFiles.map(async (file) => {
    const postSlug = file.replace(/\.mdx?$/, "");
    const mod = await import(`@/content/${postSlug}.mdx`);
    const metadata = mod.matter;
    return {
      url: `https://www.tectrix.dev/blog/${postSlug}`,
      images: [`https://www.tectrix.dev/blog/${metadata.image}`],
      lastModified: new Date(metadata.date),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  }),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tectrix.dev",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.tectrix.dev/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...postSitemaps,
  ];
}
