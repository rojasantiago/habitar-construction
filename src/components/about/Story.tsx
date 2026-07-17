import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES, img } from "@/lib/images";

export function Story({ dict }: { dict: Dictionary }) {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={img(IMAGES.siteAerial, 1000)}
              alt={dict.about.storyTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-stone-100 bg-white px-6 py-4 shadow-2xl shadow-navy-900/15">
            <p className="font-display text-2xl font-bold text-navy-900">
              {dict.about.stats[1].value}
            </p>
            <p className="text-xs text-slate-500">{dict.about.stats[1].label}</p>
          </div>
        </Reveal>

        <Reveal className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
            <span className="h-px w-6 bg-current opacity-60" />
            {dict.about.heroEyebrow}
          </span>
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            {dict.about.storyTitle}
          </h2>
          {dict.about.storyParagraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
