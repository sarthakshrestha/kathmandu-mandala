import { useTranslationStore } from "@/app/store/translation-store";

export function useTranslation() {
  const t = useTranslationStore((state) => state.t);
  const locale = useTranslationStore((state) => state.locale);

  return { t, locale };
}
