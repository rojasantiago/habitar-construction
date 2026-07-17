"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/ui/Container";
import { img } from "@/lib/images";

export function ProjectsGrid({ dict }: { dict: Dictionary }) {
  const categories = useMemo(
    () => Array.from(new Set(dict.projects.items.map((p) => p.category))),
    [dict]
  );
  const [active, setActive] = useState<string>(dict.projects.filterAll);

  const filtered =
    active === dict.projects.filterAll
      ? dict.projects.items
      : dict.projects.items.filter((p) => p.category === active);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[dict.projects.filterAll, ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-stone-100 text-slate-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img(project.imageId, 800)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {project.title}
                </h3>
                <p className="flex items-center gap-1.5 text-xs font-medium text-orange-600">
                  <MapPin size={14} />
                  {project.location}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
