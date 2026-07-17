import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { CTASection } from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.projects };
}

export default async function ProjectsPage({
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
        eyebrow={dict.projects.heroEyebrow}
        title={dict.projects.heroTitle}
        subtitle={dict.projects.heroSubtitle}
      />
      <ProjectsGrid dict={dict} />
      <CTASection
        locale={locale as Locale}
        dict={dict}
        title={dict.projects.ctaTitle}
        subtitle={dict.projects.ctaSubtitle}
      />
    </>
  );
}
