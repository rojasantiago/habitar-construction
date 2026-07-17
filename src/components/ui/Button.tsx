import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20",
  ghost:
    "border border-white/25 text-white hover:bg-white/10 backdrop-blur-sm",
  light:
    "bg-white text-navy-900 hover:bg-stone-100 shadow-lg shadow-black/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
