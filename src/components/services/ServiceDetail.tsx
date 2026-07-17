import Image from "next/image";
import {
  CheckCircle2,
  ClipboardList,
  Building2,
  Hammer,
  LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

const icons: LucideIcon[] = [ClipboardList, Building2, Hammer];

export function ServiceDetail({
  locale,
  dict,
  index,
}: {
  locale: Locale;
  dict: Dictionary;
  index: number;
}) {
  const service = dict.services.list[index];
  const Icon = icons[index];
  const reversed = index % 2 === 1;

  return (
    <section className={`py-20 sm:py-24 ${index % 2 === 0 ? "bg-white" : "bg-stone-50"}`}>
      <Container>
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal className="flex flex-col gap-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-orange-500">
              <Icon size={26} />
            </span>
            <span className="font-display text-sm font-semibold text-orange-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {service.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              {service.description}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  {point}
                </li>
              ))}
            </ul>
            <Button href={`/${locale}/contact`} className="mt-3 w-fit" withArrow>
              {dict.common.ctaPrimary}
            </Button>
          </Reveal>

          <Reveal delay={100} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={img(service.imageId, 1000)}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
