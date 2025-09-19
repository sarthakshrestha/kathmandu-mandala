"use client";
import React from "react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function RestaurantMain() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f8f3ea] px-4 md:px-12 py-8 pb-24 md:pt-12 flex items-center justify-center max-sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center w-full">
        {/* Image */}
        <div className="flex-1 w-full">
          <img
            src="/images/restaurant/1.png"
            alt="Kathmandu Mandala Restaurant"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 w-full flex flex-col justify-center">
          <h1 className=" text-4xl md:text-5xl font-semibold mb-6 text-[#1a1a1a] font-garamond">
            Kathmandu Mandala
          </h1>
          <p className="text-lg md:text-xl text-[#333] mb-6 leading-relaxed">
            {t("restaurant_main_paragraph_1")}
          </p>
          <p className="text-lg md:text-xl text-[#333] mb-6 leading-relaxed">
            {t("restaurant_main_paragraph_2")}
          </p>
          <a
            href="tel:+977123456798"
            className="text-base italic underline text-[#222] mt-2 w-fit"
          >
            +977 123456798
          </a>
        </div>
      </div>
    </section>
  );
}
