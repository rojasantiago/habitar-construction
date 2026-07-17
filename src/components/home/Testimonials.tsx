import { Quote, Star } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="bg-stone-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={h.testimonialsEyebrow}
            title={h.testimonialsTitle}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {h.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-navy-900/5">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={16}
                        className="fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <Quote size={30} className="text-orange-500/25" />
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-stone-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
