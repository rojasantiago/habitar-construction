import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      <Container className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {dict.home.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="flex flex-col items-center gap-2 text-center"
          >
            <p className="font-display text-4xl font-bold text-orange-500 sm:text-5xl">
              {stat.value}
            </p>
            <p className="text-sm text-slate-300">{stat.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
