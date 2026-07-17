import Image from "next/image";
import {
  MessageSquareText,
  Users,
  BadgeCheck,
  CalendarClock,
  Award,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES, img } from "@/lib/images";

const icons = [MessageSquareText, Users, BadgeCheck, CalendarClock];

export function WhyUs({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/5]">
            <Image
              src={img(IMAGES.blueprints, 900)}
              alt={h.whyTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
          {/* Floating experience badge */}
          <div className="absolute -bottom-6 -right-2 flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-2xl shadow-navy-900/15 sm:right-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-orange-500">
              <Award size={26} />
            </span>
            <div>
              <p className="font-display text-3xl font-bold leading-none text-navy-900">
                {h.stats[0].value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{h.stats[0].label}</p>
            </div>
          </div>
        </Reveal>

        {/* Content side */}
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-6 bg-current opacity-60" />
              {h.whyEyebrow}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 text-balance sm:text-4xl">
              {h.whyTitle}
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              {h.whySubtitle}
            </p>
          </Reveal>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {h.whyItems.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={item.title} delay={i * 80} className="flex flex-col gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
