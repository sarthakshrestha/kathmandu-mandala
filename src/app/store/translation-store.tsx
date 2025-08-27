"use client";
import { create } from "zustand";

type Translations = Record<string, string>;

interface TranslationState {
  locale: string;
  translations: Translations;
  isLoaded: boolean;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

export const useTranslationStore = create<TranslationState>((set, get) => ({
  locale: "gb",
  translations: {},
  isLoaded: false,
  setLocale: async (locale: string) => {
    set({ isLoaded: false });
    if (typeof window !== "undefined") {
      const res = await fetch(`/locales/${locale}.json`);
      const data = await res.json();
      set({ locale, translations: data, isLoaded: true });
    }
  },
  t: (key: string) => get().translations[key] || key,
}));

useTranslationStore.getState().setLocale("gb");
