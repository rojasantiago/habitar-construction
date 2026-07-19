import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IMAGES, img } from "@/lib/images";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950">
      {/* Background photo */}
      <Image
        src={img(IMAGES.houseDusk, 2000)}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient overlays for legibility + brand depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      <div className="bg-grid absolute inset-0 opacity-30" />

      <Container className="relative z-10 pt-28 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-orange-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            {h.heroEyebrow}
          </span>

          {/* Base size is tuned so the no-wrap highlight keeps a margin on
              narrow phones. */}
          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            {h.heroTitle}{" "}
            <span className="relative whitespace-nowrap text-orange-500">
              {h.heroHighlight}
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-orange-500/60" />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200">
            {h.heroSubtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={`/${locale}/contact`} variant="primary" withArrow>
              {h.heroCtaPrimary}
            </Button>
            <Button href={`/${locale}/services`} variant="ghost">
              {h.heroCtaSecondary}
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <ShieldCheck size={18} className="text-orange-400" />
              {h.heroTrust}
            </div>
          </div>
        </div>
      </Container>

      {/* Floating stat card */}
      <div className="absolute bottom-10 right-8 z-10 hidden xl:block">
        <div className="w-64 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <p className="font-display text-4xl font-bold text-white">
            {h.stats[1].value}
          </p>
          <p className="mt-1 text-sm text-slate-300">{h.stats[1].label}</p>
          <div className="my-4 h-px w-full bg-white/10" />
          <a
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
          >
            {dict.common.ctaSecondary}
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
