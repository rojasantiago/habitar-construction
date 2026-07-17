import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale as Locale} dict={dict} />
      <TrustBar dict={dict} />
      <ServicesOverview locale={locale as Locale} dict={dict} />
      <WhyUs dict={dict} />
      <Stats dict={dict} />
      <Process dict={dict} />
      <FeaturedProjects locale={locale as Locale} dict={dict} />
      <Testimonials dict={dict} />
      <CTASection
        locale={locale as Locale}
        dict={dict}
        title={dict.home.ctaTitle}
        subtitle={dict.home.ctaSubtitle}
      />
    </>
  );
}
