import { BadgeCheck, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The licence, printed in full.
 *
 * This is the only claim on the site a stranger can check independently, which
 * is exactly why it is set out subcategory by subcategory in the Régie's own
 * wording rather than summarised into a slogan. The closing note tells the
 * visitor where to go and verify it.
 */
export function LicenceScope({ dict }: { dict: Dictionary }) {
  const a = dict.about;

  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={a.licenceEyebrow}
            title={a.licenceTitle}
            subtitle={a.licenceSubtitle}
          />
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center gap-3 rounded-xl border border-navy-900/10 bg-navy-900 px-6 py-4 text-white">
            <ShieldCheck size={20} className="shrink-0 text-orange-500" />
            <p className="font-display text-base font-bold tracking-wide sm:text-lg">
              {dict.common.rbqLicense}
            </p>
          </div>
        </Reveal>

        {/* La liste détaillée des sous-catégories est volontairement vide : elle
            parlait à la Régie, pas au propriétaire qui lit la page. Le numéro
            suffit à rendre la licence vérifiable, ce qui est le seul but. */}
        {a.licenceItems.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {a.licenceItems.map((item, i) => (
              <Reveal key={item.code} delay={Math.min(i, 8) * 45}>
                <div className="flex h-full items-start gap-3.5 rounded-xl border border-stone-200 bg-white px-5 py-4">
                  <BadgeCheck size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <p className="text-sm leading-relaxed text-slate-700">
                    <span className="font-display font-bold text-navy-900">{item.code}</span>
                    <span className="mx-2 text-stone-300">|</span>
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-slate-400">
            {a.licenceNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
