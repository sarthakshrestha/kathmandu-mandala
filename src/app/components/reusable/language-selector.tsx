"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useTranslationStore } from "@/app/store/translation-store";

const LanguageSelector = () => {
  const locale = useTranslationStore((state) => state.locale);
  const setLocale = useTranslationStore((state) => state.setLocale);

  return (
    <Select value={locale} onValueChange={setLocale}>
      <SelectTrigger className="w-[140px] bg-transparent text-white font-links text-base border-none outline-none ">
        <SelectValue>
          {locale === "gb" ? (
            <span>
              <span className="mr-2">🇩🇪</span> Deutsch
            </span>
          ) : (
            <span>
              <span className="mr-2">🇬🇧</span> English
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gb">
          <span className="mr-2">🇩🇪</span> Deutsch
        </SelectItem>
        <SelectItem value="en">
          <span className="mr-2">🇬🇧</span> English
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
