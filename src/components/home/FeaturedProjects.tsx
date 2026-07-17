import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

export function FeaturedProjects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.home;
  const featured = dict.projects.items.slice(0, 3);

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-6 bg-current opacity-60" />
              {h.featuredEyebrow}
            </span>
            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-navy-900 text-balance sm:text-4xl">
              {h.featuredTitle}
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-slate-600">
              {h.featuredSubtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-900"
          >
            {h.featuredCta}
            <ArrowRight
              size={17}
              className="text-orange-500 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <Link
                href={`/${locale}/projects`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img(project.imageId, 800)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                  <span className="w-fit rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin size={13} />
                    {project.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
