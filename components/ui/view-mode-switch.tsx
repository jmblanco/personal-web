"use client";

import * as React from "react";
import { useViewMode } from "@/components/view-mode-context";
import { Terminal, LayoutTemplate } from "lucide-react";

export function ViewModeSwitch() {
  const { mode, setMode } = useViewMode();

  return (
    <div className="inline-flex items-center p-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono select-none">
      <button
        type="button"
        onClick={() => setMode("executive")}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
          mode === "executive"
            ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs font-medium"
            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        }`}
        title="Cambiar a vista Ejecutiva Editorial"
      >
        <LayoutTemplate className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Executive</span>
      </button>

      <button
        type="button"
        onClick={() => setMode("terminal")}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
          mode === "terminal"
            ? "bg-neutral-950 text-emerald-400 dark:bg-neutral-800 dark:text-emerald-400 shadow-xs font-medium"
            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        }`}
        title="Cambiar a vista System / Terminal"
      >
        <Terminal className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Terminal</span>
      </button>
    </div>
  );
}
