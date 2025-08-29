"use client";
import { create } from "zustand";

type Translations = Record<string, string>;

interface TranslationState {
  locale: string;
  translations: Translations;
  isLoaded: boolean;
  setLocale: (locale: string) => Promise<void>;
  t: (key: string) => string;
}

function getInitialLocale(): string {
  if (typeof window !== "undefined") {
    return localStorage.getItem("locale") || "gb";
  }
  return "gb";
}

export const useTranslationStore = create<TranslationState>((set, get) => ({
  locale: getInitialLocale(),
  translations: {},
  isLoaded: false,
  setLocale: async (locale: string) => {
    set({ isLoaded: false });
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      const res = await fetch(`/locales/${locale}.json`);
      const data = await res.json();
      set({ locale, translations: data, isLoaded: true });
    }
  },
  t: (key: string) => get().translations[key] || key,
}));

if (typeof window !== "undefined") {
  useTranslationStore.getState().setLocale(getInitialLocale());
}
