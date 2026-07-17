import { ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

export function TrustBar({ dict }: { dict: Dictionary }) {
  const badges = dict.home.trustBadges;
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...badges, ...badges];

  return (
    <section className="border-y border-stone-200 bg-white py-5">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {loop.map((badge, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-slate-500"
            >
              <ShieldCheck size={18} className="text-orange-500" />
              <span className="whitespace-nowrap tracking-tight">{badge}</span>
              <span className="ml-8 h-4 w-px bg-stone-300" aria-hidden />
            </div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
