import { create } from "zustand";

type Translations = Record<string, string>;

interface TranslationState {
  locale: string;
  translations: Translations;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

export const useTranslationStore = create<TranslationState>((set, get) => ({
  locale: "gb",
  translations: {},
  setLocale: async (locale: string) => {
    const res = await fetch(`/locales/${locale}.json`);
    const data = await res.json();
    set({ locale, translations: data });
  },
  t: (key: string) => get().translations[key] || key,
}));

useTranslationStore.getState().setLocale("gb");
