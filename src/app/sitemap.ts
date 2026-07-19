import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getBaseUrl } from "@/lib/site";

const pages = ["", "/services", "/projects", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }))
  );
}
