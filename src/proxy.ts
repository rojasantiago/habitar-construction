import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

/**
 * The site is private while its content is being finalised.
 *
 * Set SITE_PASSWORD to require a password; unset SITE_PUBLIC (or set it to
 * anything other than "true") keeps the gate on. The gate deliberately fails
 * closed: with no password configured, nobody gets in.
 */
const IS_PUBLIC = process.env.SITE_PUBLIC?.trim() === "true";
// Trimmed so a stray space pasted into the dashboard doesn't lock everyone out.
const PASSWORD = process.env.SITE_PASSWORD?.trim();

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    const match = preferred.find((lang) => isLocale(lang));
    if (match) return match;
  }
  return defaultLocale;
}

function unauthorized() {
  return new NextResponse("Accès restreint — Habitar Construction", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Habitar Construction", charset="UTF-8"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

function closed() {
  return new NextResponse(
    "Ce site est temporairement hors ligne.\n\nThis site is temporarily offline.",
    {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
        "Retry-After": "86400",
      },
    }
  );
}

function checkPassword(request: NextRequest): boolean {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;
  try {
    const decoded = atob(header.slice(6));
    // Accept the password in either field so the username can be anything.
    const separator = decoded.indexOf(":");
    const user = decoded.slice(0, separator).trim();
    const pass = decoded.slice(separator + 1).trim();
    return pass === PASSWORD || user === PASSWORD;
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  if (!IS_PUBLIC) {
    if (!PASSWORD) return closed();
    if (!checkPassword(request)) return unauthorized();
  }

  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything is gated, including assets, so nothing leaks while private.
  matcher: ["/((?!_next/static/chunks/webpack).*)"],
};
