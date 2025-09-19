"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";

export default function GuideMain() {
  const { t, locale } = useTranslation();

  return (
    <section className="bg-[#FFF9EE] px-4 md:px-12 py-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center w-full rounded-2xl bg-[#F7ECD8] p-6 md:p-6">
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="rounded-xl overflow-hidden w-full max-w-xs">
            <Image
              src="/images/guides/Santosh.png"
              alt="Santosh Sapkota"
              width={600}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="text-2xl font-garamond text-[#4B2323] font-semibold mt-2 flex justify-center">
              Santosh Sapkota
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-3xl font-garamond font-semibold mb-6 text-[#4B2323] text-center md:text-left">
            {t("guide_title")}
          </h2>
          <p className="text-base md:text-base text-[#4B2323] leading-relaxed mb-6">
            {t("guide_main_paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
}
