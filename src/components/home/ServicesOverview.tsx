import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Building2, Hammer, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

const icons = [ClipboardList, Building2, Hammer];

export function ServicesOverview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.home;

  return (
    <section className="bg-stone-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={h.servicesEyebrow}
            title={h.servicesTitle}
            subtitle={h.servicesSubtitle}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.list.map((service, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={service.title} delay={i * 90}>
                <Link
                  href={`/${locale}/services`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-2xl hover:shadow-navy-900/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={img(service.imageId, 800)}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <h3 className="flex items-start justify-between gap-2 font-display text-xl font-semibold text-navy-900">
                      {service.title}
                      <ArrowUpRight
                        size={20}
                        className="mt-0.5 shrink-0 text-slate-300 transition-colors group-hover:text-orange-500"
                      />
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
