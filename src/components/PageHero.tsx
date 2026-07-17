import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IMAGES, img } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  imageId = IMAGES.siteAerial,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  imageId?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-20 sm:pt-40 sm:pb-24">
      <Image
        src={img(imageId, 1800)}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
          <span className="h-px w-6 bg-current opacity-60" />
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
          {subtitle}
        </p>
        {children}
      </Container>
    </section>
  );
}
