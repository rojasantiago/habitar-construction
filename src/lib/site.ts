/**
 * Canonical base URL for absolute links (sitemap, robots, metadata).
 *
 * Order of preference:
 *  1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is connected.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel fills this in with the project's
 *     production domain, so it stays correct without hardcoding anything.
 *  3. localhost, for local development.
 */
export function getBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
