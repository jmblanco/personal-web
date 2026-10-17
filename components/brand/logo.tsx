import * as React from "react";
import { SITE_PROFILE } from "@/content/profile";

interface InitialsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Monograma tipográfico sobrio y minimalista basado en iniciales configurables
 */
export function JmbgInitials({ size = "md", className = "" }: InitialsProps) {
  const sizeClasses = {
    sm: "w-7 h-7 text-[11px]",
    md: "w-8 h-8 text-xs",
    lg: "w-10 h-10 text-sm",
  }[size];

  return (
    <span
      className={`inline-flex items-center justify-center font-mono font-bold tracking-tight rounded-md bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 select-none shrink-0 ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      {SITE_PROFILE.personal.initials}
    </span>
  );
}

export function JmbgBrand({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <JmbgInitials size="sm" />
      <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-white">
        {SITE_PROFILE.personal.name}
      </span>
    </div>
  );
}
