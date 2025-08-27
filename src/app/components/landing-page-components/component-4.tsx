"use client";
import Image from "next/image";
import { Truck, Timer, Headphones } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function Component4() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <section className="relative py-24 px-2 sm:px-6 lg:px-12 overflow-hidden">
      {/* Decorative background pattern */}
      <Image
        src="/images/background/BackgroundPattern.png"
        alt="Background Pattern"
        fill
        className="object-cover object-center pointer-events-none select-none "
        style={{ zIndex: 0 }}
        priority
      />
      <div className="relative z-10 md:max-w-[85rem] mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Text */}
        <div className="flex-1 w-full">
          <h2 className="font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            {t("courier_title")} <br /> {t("courier_subtitle")}
          </h2>
          <p className="text-white font-links text-base md:text-lg mb-8 max-w-xl">
            {t("courier_paragraph")}
          </p>
          <ul className="space-y-6 mb-8">
            <li className="flex items-start gap-4">
              <Truck className="w-7 h-7 text-[#FFD868] shrink-0" />
              <div>
                <span className="font-semibold text-white">
                  {t("courier_service_title")}
                </span>
                <div className="text-white text-sm">
                  {t("courier_service_desc")}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Timer className="w-7 h-7 text-[#FFD868] shrink-0" />
              <div>
                <span className="font-semibold text-white">
                  {t("courier_speed_title")}
                </span>
                <div className="text-white text-sm">
                  {t("courier_speed_desc")}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Headphones className="w-7 h-7 text-[#FFD868] shrink-0" />
              <div>
                <span className="font-semibold text-white">
                  {t("courier_support_title")}
                </span>
                <div className="text-white text-sm">
                  {t("courier_support_desc")}
                </div>
              </div>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block bg-[#D6A346] hover:bg-[#c9a13e] text-[#4B2323] font-links font-semibold px-6 py-3 rounded-lg shadow transition text-base mt-2"
          >
            {t("courier_button")}
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="w-full md:w-[500px] md:h-[500px] aspect-square relative rounded-xl overflow-hidden">
            <Image
              src="/images/Delivery.png"
              alt={t("courier_image_alt")}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
