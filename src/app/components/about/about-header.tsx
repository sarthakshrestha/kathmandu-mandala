"use client";
import { useTranslation } from "@/app/hooks/use-translation";

export default function AboutHeader() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  return (
    <header className="bg-[#FFF9EE] py-12 px-2 text-center w-full max-sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-[#B94B4B] font-links text-base font-semibold mb-2">
          {t("about_us")}
        </div>
        <h1 className="font-garamond text-3xl sm:text-5xl mb-4 text-[#23233B]">
          {t("about_company_title")}
        </h1>
        <p className="text-[#23233B]/70 font-links text-base sm:text-lg">
          {t("about_company_subtitle")}
        </p>
      </div>
    </header>
  );
}
