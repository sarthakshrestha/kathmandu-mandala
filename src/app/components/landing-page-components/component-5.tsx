"use client";
import Image from "next/image";
import { BadgeCheck, Plane, BookCopy } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function Component5() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <section className="bg-[#F7ECD8] px-4 md:px-12 max-sm:py-12 py-16 flex items-center justify-center max-sm:px-8">
      <div className="md:md:max-w-[85rem] max-sm:px-2 px-18 mx-auto flex flex-col md:flex-row gap-12 items-center w-full">
        {/* Left: Text & Services */}
        <div className="flex-1 w-full">
          <h2 className="font-garamond text-2xl md:text-4xl lg:text-5xl text-[#23233B] mb-6 leading-tight">
            {t("discover_title")} <br /> {t("discover_subtitle")}
          </h2>
          <p className="text-[#23233B] font-links text-base md:text-lg mb-8 max-w-2xl">
            {t("discover_paragraph")}
          </p>
          {/* Services Card */}
          <div className="bg-transparent rounded-xl border border-gray-200 p-6 mb-6 max-w-xl">
            <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <BookCopy className="w-7 h-7 text-[#B94B4B]" />
                <span className="font-garamond text-lg text-[#23233B] font-semibold">
                  {t("discover_visa")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Plane className="w-7 h-7 text-[#B94B4B]" />
                <span className="font-garamond text-lg text-[#23233B] font-semibold">
                  {t("discover_travel")}
                </span>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#B94B4B]" />
                <span className="font-links text-[#23233B] font-semibold">
                  {t("discover_action")}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#B94B4B]" />
                <span className="font-links text-[#23233B] font-semibold">
                  {t("discover_mission")}
                </span>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="inline-block bg-[#D6A346] hover:bg-[#c9a13e] text-[#23233B] font-links font-semibold px-6 py-3 rounded-lg shadow transition text-base mt-2"
          >
            {t("discover_button")}
          </a>
        </div>
        {/* Right: Divider lines & Images */}
        <div className="flex-1 w-full flex flex-row gap-6 items-center">
          {/* Divider lines on the left of images */}
          {/* <div className="flex flex-col items-center gap-2 mr-4">
            <span className="h-16 w-1 bg-[#B94B4B] rounded"></span>
            <span className="h-16 w-1 bg-[#D6A346] rounded"></span>
          </div> */}
          {/* Images */}
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="w-full md:w-[400px] h-[260px] relative rounded-xl overflow-hidden">
              <Image
                src="/images/Passport.png"
                alt={t("discover_passport_alt")}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
            <div className="w-full md:w-[400px] h-[180px] relative rounded-xl overflow-hidden">
              <Image
                src="/images/Hotel.png"
                alt={t("discover_hotel_alt")}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
