import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

export function ContactInfo({ dict }: { dict: Dictionary }) {
  const items = [
    {
      icon: Phone,
      label: dict.contact.infoPhone,
      value: dict.common.phone,
      href: `tel:${dict.common.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: Mail,
      label: dict.contact.infoEmail,
      value: dict.common.email,
      href: `mailto:${dict.common.email}`,
    },
    { icon: MapPin, label: dict.contact.infoRegion, value: dict.common.region },
    { icon: Clock, label: dict.contact.infoHours, value: dict.footer.hoursValue },
  ];

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-navy-900 p-8 sm:p-10">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />
      <h3 className="relative font-display text-lg font-semibold text-white">
        {dict.contact.infoTitle}
      </h3>
      <div className="relative flex flex-col gap-5">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-500">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            </div>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="transition-opacity hover:opacity-80"
            >
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
