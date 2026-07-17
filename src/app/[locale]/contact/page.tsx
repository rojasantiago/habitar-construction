import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/lib/images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.contact };
}

export default async function ContactPage({
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
        eyebrow={dict.contact.heroEyebrow}
        title={dict.contact.heroTitle}
        subtitle={dict.contact.heroSubtitle}
        imageId={IMAGES.livingStairs}
      />
      <section className="bg-stone-50 py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-6 font-display text-xl font-semibold text-navy-900">
              {dict.contact.formTitle}
            </h2>
            <ContactForm dict={dict} />
          </div>
          <ContactInfo dict={dict} />
        </Container>
      </section>
    </>
  );
}
