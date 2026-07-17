import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://habitarconstruction.vercel.app";
const pages = ["", "/services", "/projects", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }))
  );
}
