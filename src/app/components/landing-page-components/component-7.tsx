"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function Component7() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <section
      className="relative w-full h-[600px] md:h-[500px] flex items-center justify-start overflow-hidden max-sm:py-12 max-sm:px-8 md:px-14 "
      style={{ minHeight: "400px" }}
    >
      {/* Background Image */}
      <Image
        src="/images/Nepal.png"
        alt={t("hero_image_alt")}
        fill
        priority
        className="object-cover object-center z-0"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 px-4 md:px-8 text-left justify-start w-full">
        <div className="max-w-[85rem] mx-auto lg:px-18">
          <h1 className="font-garamond text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            {t("hero_title")} <br /> {t("hero_subtitle")}
          </h1>
          <p className="text-white font-links text-base md:text-lg mb-8 max-w-2xl">
            {t("hero_paragraph")}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white font-links font-semibold text-base group"
          >
            {t("hero_button")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
