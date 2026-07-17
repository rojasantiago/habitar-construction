import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES, img } from "@/lib/images";

export function CTASection({
  locale,
  dict,
  title,
  subtitle,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      <Image
        src={img(IMAGES.siteRebar, 1800)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

      <Container className="relative">
        <Reveal className="flex max-w-2xl flex-col items-start gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">{subtitle}</p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href={`/${locale}/contact`} variant="primary" withArrow>
              {dict.common.ctaPrimary}
            </Button>
            <Button href={`/${locale}/projects`} variant="ghost">
              {dict.common.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
