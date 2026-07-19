"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const f = dict.contact.formFields;

  // Until a mail service is wired up, hand the request off to the visitor's own
  // email client rather than pretending it was delivered.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `${f.name}: ${get("name")}`,
      `${f.email}: ${get("email")}`,
      `${f.phone}: ${get("phone") || "—"}`,
      `${f.projectType}: ${get("projectType")}`,
      "",
      `${f.message}:`,
      get("message"),
    ].join("\n");

    const href =
      `mailto:${dict.common.email}` +
      `?subject=${encodeURIComponent(f.emailSubject)}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus("submitting");
    window.location.href = href;
    setStatus("success");
  }

  if (status === "success") {
    const tel = dict.common.phone.replace(/[^\d+]/g, "");
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-orange-200 bg-orange-50 p-10 text-center">
        <CheckCircle2 size={40} className="text-orange-600" />
        <p className="text-base font-medium text-navy-900">{f.success}</p>
        <div className="flex flex-col items-center gap-3 border-t border-orange-200 pt-5">
          <p className="text-sm text-slate-600">{f.successHint}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <a
              href={`mailto:${dict.common.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-orange-600"
            >
              <Mail size={16} className="text-orange-500" />
              {dict.common.email}
            </a>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-orange-600"
            >
              <Phone size={16} className="text-orange-500" />
              {dict.common.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            {f.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="text-sm font-medium text-slate-700">
            {f.projectType}
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          >
            <option value="" disabled>
              —
            </option>
            {dict.contact.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
