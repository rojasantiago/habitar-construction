import { HeartHandshake, Award, Eye, Target } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [HeartHandshake, Award, Eye, Target];

export function ValuesGrid({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-stone-50 py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading title={dict.about.valuesTitle} />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.about.values.map((value, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={value.title} delay={i * 90}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-navy-900/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
