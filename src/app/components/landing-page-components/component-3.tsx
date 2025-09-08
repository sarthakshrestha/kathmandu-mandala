"use client";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function Component3() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <section className="bg-[#F7ECD8] px-4 md:px-12 max-sm:py-12 py-16 flex items-center justify-center">
      <div className="md:max-w-[78rem] md:px-18 mx-auto flex flex-col md:flex-row gap-10 items-center w-full max-sm:px-8">
        <div className="flex-1 w-full">
          <h2 className="font-garamond text-2xl md:text-4xl lg:text-5xl text-[#4B2323] mb-4 leading-tight">
            {t("restaurant_title")} <br /> {t("restaurant_subtitle")}
          </h2>
          <p className="text-[#4B2323] font-links text-base md:text-lg mb-6">
            {t("restaurant_paragraph")}
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#4B2323]" />
              <span className="font-links text-[#4B2323] font-semibold">
                {t("restaurant_location")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#4B2323]" />
              <span className="font-links text-[#4B2323]">
                {t("restaurant_hours")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#4B2323]" />
              <span className="font-links text-[#4B2323]">
                {t("restaurant_contact")}
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block bg-[#D6A346] hover:bg-[#c9a13e] text-zinc-900 font-links font-semibold px-6 py-3 rounded-lg shadow transition text-base mt-2"
          >
            {t("download_menu")}
          </a>
        </div>
        {/* Single Image */}
        <div className="w-full md:w-[700px] md:h-[500px] flex items-center justify-center">
          <div className="w-full aspect-square md:h-full relative">
            <Image
              src="/images/component3.png"
              alt={t("restaurant_image_alt")}
              fill
              className="object-cover rounded"
              sizes="(max-width: 868px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
