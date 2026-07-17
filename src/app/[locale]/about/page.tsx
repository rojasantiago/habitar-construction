import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { Story } from "@/components/about/Story";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { StatsBanner } from "@/components/about/StatsBanner";
import { CTASection } from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.about };
}

export default async function AboutPage({
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
        eyebrow={dict.about.heroEyebrow}
        title={dict.about.heroTitle}
        subtitle={dict.about.heroSubtitle}
      />
      <Story dict={dict} />
      <ValuesGrid dict={dict} />
      <StatsBanner dict={dict} />
      <CTASection
        locale={locale as Locale}
        dict={dict}
        title={dict.about.ctaTitle}
        subtitle={dict.about.ctaSubtitle}
      />
    </>
  );
}
