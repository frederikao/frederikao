import type { MetadataRoute } from "next";
import { notes, siteContent } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/hff", "/notes", "/contact"];
  return [
    ...routes.map((route) => ({
      url: `${siteContent.siteUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...notes.map((note) => ({
      url: `${siteContent.siteUrl}/notes/${note.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
