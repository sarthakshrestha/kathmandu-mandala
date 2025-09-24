"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { ArrowRight } from "lucide-react";
import LoaderComponent from "../reusable/loader-component";

function Hero() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return <LoaderComponent />;
  }

  // commit

  return (
    <div className="relative w-full h-[400px] lg:h-screen flex items-center justify-center overflow-hidden md:-mt-20 max-sm:-mt-10">
      <Image
        src="/images/HeroImage.png"
        alt="Hero"
        fill
        priority
        className="object-center object-cover"
      />
      {/* Overlay init*/}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content */}
      <div className="relative z-20 flex flex-row items-center justify-between h-full w-full px-8 lg:px-12 max-sm:px-5  lg:max-w-7xl">
        {/* First column: Text and buttons */}
        <div className="flex flex-col items-start justify-center max-w-4xl w-full space-y-4 md:space-y-6 md:pl-6 lg:pl-12 max-sm:px-4">
          <h1 className="text-[#F7ECD8] font-garamond text-xl max-sm:text-2xl md:text-xl lg:text-5xl text-left drop-shadow-lg leading-tight">
            {t("welcome")}
          </h1>
          <p className="text-[#F7ECD8] font-links text-xl max-sm:text-base text-left drop-shadow">
            {t("visa_paragraph")}
          </p>
          <div className="flex flex-row items-center space-x-2 sm:space-x-4 mt-2">
            <a
              href="/visa"
              className="bg-[#D6A346] hover:bg-[#D6A346] text-zinc-900 font-links font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow transition text-sm max-sm:text-sm"
            >
              {t("download")}
            </a>
            <a
              href="/travel"
              className="text-white font-links font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 hover:underline transition text-sm max-sm:text-sm"
            >
              {t("discover")}
              <ArrowRight className="h-5 w-auto" />
            </a>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default Hero;
