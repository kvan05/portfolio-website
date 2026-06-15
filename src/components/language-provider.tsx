"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "@/lib/i18n/dictionaries/en";
import { vi } from "@/lib/i18n/dictionaries/vi";

type Language = "en" | "vi";
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved === "vi" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(saved);
    } else {
      // Auto-detect based on browser language if not saved
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("vi")) {
        setLanguage("vi");
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "vi" : "en";
      localStorage.setItem("portfolio-language", next);
      return next;
    });
  };

  const t = language === "en" ? en : vi;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
