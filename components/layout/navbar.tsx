"use client";

import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JmbgInitials } from "@/components/brand/logo";
import { ViewModeSwitch } from "@/components/ui/view-mode-switch";
import { useViewMode } from "@/components/view-mode-context";
import { SITE_PROFILE } from "@/content/profile";

export function Navbar() {
  const { mode } = useViewMode();
  const isTerminal = mode === "terminal";
  const { personal, terminal, social } = SITE_PROFILE;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 dark:border-neutral-800/70 bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-neutral-900 dark:text-white"
          aria-label="Inicio"
        >
          {isTerminal ? (
            <span className="font-mono text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {terminal.user}@arch:~
            </span>
          ) : (
            <>
              <JmbgInitials size="sm" className="group-hover:opacity-85 transition-opacity" />
              <span className="text-sm font-semibold tracking-tight">
                {personal.name}
              </span>
            </>
          )}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Switch de Modo: Executive vs Terminal */}
          <ViewModeSwitch />

          <div className="flex items-center gap-1 pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-md hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
