import Image from "next/image";
import { Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

/**
 * Explains what a modular home actually is before selling anything.
 *
 * Most visitors arrive thinking "mobile home", so the first job of this page
 * is to correct that — the pitch only lands once the reader knows what is
 * being pitched.
 */
export function ModularIntro({ dict }: { dict: Dictionary }) {
  const m = dict.modular;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {m.introTitle}
            </h2>
            {m.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            {/* L'essentiel en liste : la plupart des visiteurs parcourent cette
                page avant de la lire, et repartent avec ces six lignes. */}
            <ul className="flex flex-col gap-3">
              {m.introPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-orange-500" strokeWidth={2.5} />
                  <span className="text-base leading-relaxed text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={img("photo-1600585154340-be6161a56a0c", 1200)}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
