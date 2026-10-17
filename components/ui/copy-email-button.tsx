"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
}

export function CopyEmailButton({
  email = "jmblanco1986@gmail.com",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback a mailto si el portapapeles está bloqueado
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Copiar email al portapapeles"
      className={`inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer group text-sm ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            ¡Copiado!
          </span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}
