"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, HardHat, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  // Solid appearance when scrolled OR when the mobile menu is open.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-stone-200 bg-stone-50/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              solid ? "bg-navy-900 text-orange-500" : "bg-white/10 text-orange-500 backdrop-blur-sm"
            }`}
          >
            <HardHat size={21} />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-bold tracking-tight transition-colors ${
                solid ? "text-navy-900" : "text-white"
              }`}
            >
              Habitar
            </span>
            <span
              className={`block text-[10px] font-semibold tracking-[0.25em] transition-colors ${
                solid ? "text-orange-600" : "text-orange-400"
              }`}
            >
              CONSTRUCTION
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-orange-500"
                  : solid
                  ? "text-slate-600 hover:text-navy-900"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher locale={locale} light={!solid} />
          <Button href={`/${locale}/contact`} className="px-5 py-2.5">
            {dict.nav.getQuote}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex items-center justify-center rounded-md p-2 transition-colors lg:hidden ${
            solid ? "text-navy-900" : "text-white"
          }`}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-stone-200 bg-stone-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-orange-100 text-orange-600"
                    : "text-slate-700 hover:bg-stone-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${dict.common.phone.replace(/[^\d+]/g, "")}`}
              className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-navy-900"
            >
              <Phone size={16} className="text-orange-500" />
              {dict.common.phone}
            </a>
            <div className="mt-1 px-3">
              <LanguageSwitcher locale={locale} />
            </div>
            <Button href={`/${locale}/contact`} className="mt-3 w-full">
              {dict.nav.getQuote}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
