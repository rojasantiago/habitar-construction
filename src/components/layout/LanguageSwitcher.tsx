"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

export function LanguageSwitcher({
  locale,
  light = false,
}: {
  locale: Locale;
  light?: boolean;
}) {
  const pathname = usePathname();

  function pathForLocale(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || "/";
  }

  return (
    <div
      className={`flex items-center gap-1 rounded-full border p-1 text-xs font-semibold ${
        light ? "border-white/25" : "border-slate-200"
      }`}
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={pathForLocale(loc)}
          aria-current={loc === locale}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            loc === locale
              ? "bg-orange-500 text-white"
              : light
              ? "text-slate-300 hover:text-white"
              : "text-slate-500 hover:text-navy-900"
          }`}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
