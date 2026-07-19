import Image from "next/image";

// Intrinsic pixel dimensions of the exported artwork.
const FULL = { w: 1164, h: 293 };
const MARK = { w: 245, h: 293 };

/**
 * The Habitar wordmark lockup. `variant="white"` is the reversed artwork for
 * dark backgrounds. Sizing is driven by the parent: set a height class on the
 * wrapper and the image fills it, keeping its aspect ratio.
 */
export function Logo({
  variant = "dark",
  className = "",
  priority = false,
}: {
  variant?: "dark" | "white";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-full-white.png" : "/brand/logo-full.png"}
      alt="Habitar Construction"
      width={FULL.w}
      height={FULL.h}
      priority={priority}
      className={`h-full w-auto max-w-none ${className}`}
    />
  );
}

/** The H monogram on its own, for tight spaces. */
export function LogoMark({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "white";
  className?: string;
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-mark-white.png" : "/brand/logo-mark.png"}
      alt="Habitar Construction"
      width={MARK.w}
      height={MARK.h}
      className={`h-full w-auto max-w-none ${className}`}
    />
  );
}
