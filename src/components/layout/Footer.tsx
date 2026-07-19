import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const serviceLinks = [
    dict.services.list[0].title,
    dict.services.list[1].title,
    dict.services.list[2].title,
  ];

  const companyLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-center justify-between gap-5 py-10 text-center sm:flex-row sm:text-left">
          <p className="max-w-lg font-display text-xl font-semibold text-white sm:text-2xl">
            {dict.footer.ctaTitle}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            {dict.common.ctaPrimary}
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </div>

      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="block h-12 w-fit">
            <Logo variant="white" />
          </span>
          <p className="text-sm leading-relaxed text-slate-400">
            {dict.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
            {dict.footer.servicesTitle}
          </h3>
          {serviceLinks.map((label) => (
            <Link
              key={label}
              href={`/${locale}/services`}
              className="text-sm text-slate-400 transition-colors hover:text-orange-400"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
            {dict.footer.companyTitle}
          </h3>
          {companyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
            {dict.footer.contactTitle}
          </h3>
          <a
            href={`tel:${dict.common.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400"
          >
            <Phone size={16} className="shrink-0 text-orange-500" />
            {dict.common.phone}
          </a>
          <a
            href={`mailto:${dict.common.email}`}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400"
          >
            <Mail size={16} className="shrink-0 text-orange-500" />
            {dict.common.email}
          </a>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="shrink-0 text-orange-500" />
            {dict.common.region}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Clock size={16} className="shrink-0 text-orange-500" />
            {dict.footer.hoursValue}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} Habitar Construction. {dict.footer.rights}
          </p>
          <p>{dict.common.rbqLicense}</p>
        </Container>
      </div>
    </footer>
  );
}
