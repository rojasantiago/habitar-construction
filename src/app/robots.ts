import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site";

const IS_PUBLIC = process.env.SITE_PUBLIC === "true";

export default function robots(): MetadataRoute.Robots {
  // While the site is private, ask crawlers to stay out entirely. The password
  // gate already blocks them, but this avoids the URL lingering anywhere.
  if (!IS_PUBLIC) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
