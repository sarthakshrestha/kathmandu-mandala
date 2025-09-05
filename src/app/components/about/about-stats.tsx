"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";

export default function AboutStats() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  return (
    <section className="bg-[#F7ECD8] py-12 px-2 max-sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/Companies.png"
            alt={t("about_stats_image_alt")}
            width={500}
            height={400}
            className="rounded-xl "
            priority
          />
        </div>
        {/* Right: Stats */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-[#9A2731] font-links text-base font-semibold mb-2">
            {t("about_stats_subtitle")}
          </div>
          <h2 className="font-garamond text-2xl sm:text-4xl mb-4 text-[#23233B]">
            {t("about_stats_title")}
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-8 sm:gap-x-16 mb-4">
            <div className="flex flex-col items-center">
              <div className="text-[#9A2731]  text-5xl font-bold mb-2">
                400+
              </div>
              <div className="font-links text-[#23233B] text-lg text-center">
                {t("about_stats_projects")}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#9A2731]  text-5xl font-bold mb-2">
                600%
              </div>
              <div className="font-links text-[#23233B] text-lg text-center">
                {t("about_stats_roi")}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#9A2731] text-5xl font-bold mb-2">10k</div>
              <div className="font-links text-[#23233B] text-lg text-center">
                {t("about_stats_downloads")}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#9A2731]  text-5xl font-bold mb-2">
                200+
              </div>
              <div className="font-links text-[#23233B] text-lg text-center">
                {t("about_stats_reviews")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
