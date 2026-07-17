import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES, img } from "@/lib/images";

export function StatsBanner({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <Image
        src={img(IMAGES.glassBuilding, 1800)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 to-navy-950" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <Container className="relative flex flex-col gap-12">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
            {dict.about.statsTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {dict.about.stats.map((stat, i) => (
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
        </div>
      </Container>
    </section>
  );
}
