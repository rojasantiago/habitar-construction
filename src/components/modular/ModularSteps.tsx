import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The five site stages, numbered.
 *
 * Numbering is earned here: these steps genuinely happen in this order, and
 * each depends on the one before — the foundation cannot be poured before the
 * ground is graded, the modules cannot land before the foundation cures.
 */
export function ModularSteps({ dict }: { dict: Dictionary }) {
  const m = dict.modular;

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

      <Container className="relative flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={m.stepsEyebrow}
            title={m.stepsTitle}
            subtitle={m.stepsSubtitle}
            light
          />
        </Reveal>

        <ol className="flex flex-col gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {m.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70} className="bg-navy-900">
              <li className="flex flex-col gap-3 px-6 py-7 sm:flex-row sm:gap-8 sm:px-8">
                <span className="font-display text-3xl font-bold text-orange-500 sm:w-16 sm:shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
