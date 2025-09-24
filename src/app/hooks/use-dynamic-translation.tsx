"use client";
import { useMemo } from "react";
import { useTranslation } from "@/app/hooks/use-translation";

/**
 * Hook to get the correct translation from API response based on current locale
 * @param data API response data containing translations array
 * @param fallbackLocale Optional fallback locale if current locale is not found (defaults to 'en')
 * @returns The current translation object based on locale
 */
export function useCurrentTranslation(data: any, fallbackLocale = "en") {
  const { locale } = useTranslation();

  const currentTranslation = useMemo(() => {
    if (!data) return null;

    // If translations exist in data
    if (data.translations && Array.isArray(data.translations)) {
      // Try to find translation matching current locale
      const translation = data.translations.find(
        (trans: any) => trans.language === locale
      );

      // If found, return it
      if (translation) return translation;

      // If not found, try fallback locale
      const fallbackTranslation = data.translations.find(
        (trans: any) => trans.language === fallbackLocale
      );

      // If fallback found, return it
      if (fallbackTranslation) return fallbackTranslation;

      // Last resort: return first translation if it exists
      if (data.translations.length > 0) return data.translations[0];
    }

    // If no translations array or no translations found, return the data itself
    return data;
  }, [data, locale, fallbackLocale]);

  return currentTranslation;
}
