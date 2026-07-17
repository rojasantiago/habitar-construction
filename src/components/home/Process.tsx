import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="bg-stone-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow={h.processEyebrow} title={h.processTitle} />
        </Reveal>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-stone-300 lg:block" />
          {h.processSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 110}
              className="relative flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-white font-display text-lg font-bold text-orange-500 shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-stone-300 lg:hidden" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
