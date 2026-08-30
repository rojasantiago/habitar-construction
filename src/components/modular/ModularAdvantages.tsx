import { Clock, CloudRain, FileText, ShieldCheck, LucideIcon } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: LucideIcon[] = [Clock, CloudRain, FileText, ShieldCheck];

export function ModularAdvantages({ dict }: { dict: Dictionary }) {
  const m = dict.modular;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow={m.advantagesEyebrow} title={m.advantagesTitle} />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {m.advantages.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-500">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
