"use client";

import * as React from "react";

export type ViewMode = "executive" | "terminal";

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
}

const ViewModeContext = React.createContext<ViewModeContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): ViewMode {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const urlView = params.get("view");
    if (urlView === "executive" || urlView === "terminal") {
      return urlView;
    }
  }
  const saved = localStorage.getItem("jmb-view-mode");
  if (saved === "executive" || saved === "terminal") {
    return saved;
  }
  return "executive";
}

function getServerSnapshot(): ViewMode {
  return "executive";
}

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const syncedMode = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [internalMode, setInternalMode] = React.useState<ViewMode | null>(null);

  const mode = internalMode ?? syncedMode;

  const setMode = React.useCallback((newMode: ViewMode) => {
    setInternalMode(newMode);
    localStorage.setItem("jmb-view-mode", newMode);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.get("view") !== newMode) {
        url.searchParams.set("view", newMode);
        window.history.replaceState({}, "", url.toString());
      }
    }
  }, []);

  const toggleMode = React.useCallback(() => {
    const next = mode === "executive" ? "terminal" : "executive";
    setMode(next);
  }, [mode, setMode]);



  return (
    <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = React.useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
