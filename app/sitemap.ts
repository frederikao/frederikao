import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";
import { siteContent } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteContent.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...getAllNotes().map((note) => ({
      url: `${siteContent.siteUrl}/notes/${note.slug}`,
      lastModified: note.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
