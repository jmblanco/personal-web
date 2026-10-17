"use client";

import { useViewMode } from "@/components/view-mode-context";
import { ExecutiveView } from "@/components/views/executive-view";
import { TerminalView } from "@/components/views/terminal-view";

export default function HomePage() {
  const { mode } = useViewMode();

  return (
    <main className="w-full">
      {mode === "executive" ? <ExecutiveView /> : <TerminalView />}
    </main>
  );
}
