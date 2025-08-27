"use client";
import { useTranslationStore } from "@/app/store/translation-store";

export function useTranslation() {
  const t = useTranslationStore((state) => state.t);
  const locale = useTranslationStore((state) => state.locale);
  const isLoaded = useTranslationStore((state) => state.isLoaded);

  return { t, locale, isLoaded };
}
