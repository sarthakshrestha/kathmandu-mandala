"use client";
import { useEffect } from "react";
import { useTranslationStore } from "@/app/store/translation-store";

export function useInitialLocale() {
  useEffect(() => {
    const locale = localStorage.getItem("locale") || "de";
    useTranslationStore.getState().setLocale(locale);
  }, []);
}
