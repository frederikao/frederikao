import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteContent.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
