import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { CTASection } from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.services };
}

export default async function ServicesPage({
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
        eyebrow={dict.services.heroEyebrow}
        title={dict.services.heroTitle}
        subtitle={dict.services.heroSubtitle}
      />
      {dict.services.list.map((_, i) => (
        <ServiceDetail key={i} locale={locale as Locale} dict={dict} index={i} />
      ))}
      <CTASection
        locale={locale as Locale}
        dict={dict}
        title={dict.services.ctaTitle}
        subtitle={dict.services.ctaSubtitle}
      />
    </>
  );
}
