import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { ModularIntro } from "@/components/modular/ModularIntro";
import { ModularGallery } from "@/components/modular/ModularGallery";
import { ModularSteps } from "@/components/modular/ModularSteps";
import { ModularAdvantages } from "@/components/modular/ModularAdvantages";
import { CTASection } from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.modular, description: dict.modular.heroSubtitle };
}

export default async function ModularPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.modular.heroEyebrow}
        title={dict.modular.heroTitle}
        subtitle={dict.modular.heroSubtitle}
      />
      <ModularIntro dict={dict} />
      <ModularGallery dict={dict} />
      <ModularSteps dict={dict} />
      <ModularAdvantages dict={dict} />
      <CTASection
        locale={locale as Locale}
        dict={dict}
        title={dict.modular.ctaTitle}
        subtitle={dict.modular.ctaSubtitle}
      />
    </>
  );
}
