import Image from "next/image";
import { Info } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

/**
 * Shows what contemporary modular construction looks like.
 *
 * These are reference images of the building type, not our work, and the note
 * under the grid says so in plain words. An uncaptioned stock photo on a
 * contractor's page reads as a portfolio whether or not that was intended.
 */
export function ModularGallery({ dict }: { dict: Dictionary }) {
  const m = dict.modular;

  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading title={m.galleryTitle} subtitle={m.gallerySubtitle} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {m.gallery.map((shot, i) => (
            <Reveal key={shot.caption} delay={i * 90}>
              <figure className="flex flex-col gap-3">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={img(shot.imageId, 1000)}
                    alt={shot.caption}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-slate-500">{shot.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400">
            <Info size={15} className="mt-0.5 shrink-0" />
            {m.galleryNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
