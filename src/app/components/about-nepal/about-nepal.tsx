"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
// import { useSeo } from "@/app/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
function AboutNepal() {
  const { t, isLoaded } = useTranslation();
  // useSeo("ABOUT");
  const router = useRouter();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#FFF9EE] animate-pulse">
        <div className="h-8 bg-[#F7ECD9] rounded mb-6 w-1/3 mx-auto"></div>
        <div className="h-64 bg-[#F7ECD9] rounded mb-6"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF9EE] min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-garamond text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#4B2323] mb-6">
              {t("about_nepal_hero_title") || "Discover the Heart of Nepal"}
            </h1>
            <p className="font-links text-lg sm:text-xl text-[#4B2323] max-w-3xl mx-auto leading-relaxed">
              {t("about_nepal_hero_subtitle") ||
                "From the towering peaks of the Himalayas to the rich cultural heritage of ancient kingdoms, Nepal offers experiences that touch the soul and inspire the spirit."}
            </p>
          </div>
        </div>
      </section>

      {/* Geography & Nature Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7ECD8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-[#4B2323] mb-6">
                {t("about_nepal_geography_title") || "Land of Extremes"}
              </h2>
              <p className="font-links text-lg text-[#4B2323] mb-6 leading-relaxed">
                {t("about_nepal_geography_desc1") ||
                  "Nepal is a landlocked country nestled between the giants of China and India. Despite its small size, Nepal boasts incredible geographical diversity - from the tropical Terai plains in the south to the world's highest peaks in the north."}
              </p>
              <p className="font-links text-lg text-[#4B2323] leading-relaxed">
                {t("about_nepal_geography_desc2") ||
                  "Home to eight of the world's fourteen highest mountains, including Mount Everest, Nepal is a paradise for adventurers and nature lovers. The country's diverse ecosystems support an amazing variety of flora and fauna."}
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/about-nepal/4.jpg"
                alt={t("about_nepal_mountains_alt") || "Nepal Himalayas"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Heritage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden lg:order-first">
              <Image
                src="/images/about-nepal/2.jpg"
                alt={t("about_nepal_culture_alt") || "Nepal Culture"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-[#4B2323] mb-6">
                {t("about_nepal_culture_title") || "Rich Cultural Tapestry"}
              </h2>
              <p className="font-links text-lg text-[#4B2323] mb-6 leading-relaxed">
                {t("about_nepal_culture_desc1") ||
                  "Nepal is the birthplace of Lord Buddha and home to numerous UNESCO World Heritage Sites. The country's cultural heritage spans thousands of years, reflected in its ancient temples, palaces, and traditional architecture."}
              </p>
              <p className="font-links text-lg text-[#4B2323] leading-relaxed">
                {t("about_nepal_culture_desc2") ||
                  "With over 100 ethnic groups and 125 languages, Nepal is a melting pot of cultures. From Hindu temples to Buddhist monasteries, the spiritual diversity creates a unique harmony that defines the Nepalese way of life."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7ECD8]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-[#4B2323] mb-12">
            {t("about_nepal_facts_title") || "Nepal by Numbers"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-garamond text-3xl sm:text-4xl font-bold text-[#B94B4B] mb-2">
                8,849m
              </div>
              <p className="font-links text-sm sm:text-base text-[#4B2323]">
                {t("about_nepal_stat_everest") || "Height of Mt. Everest"}
              </p>
            </div>
            <div className="text-center">
              <div className="font-garamond text-3xl sm:text-4xl font-bold text-[#B94B4B] mb-2">
                100+
              </div>
              <p className="font-links text-sm sm:text-base text-[#4B2323]">
                {t("about_nepal_stat_ethnicgroups") || "Ethnic Groups"}
              </p>
            </div>
            <div className="text-center">
              <div className="font-garamond text-3xl sm:text-4xl font-bold text-[#B94B4B] mb-2">
                12
              </div>
              <p className="font-links text-sm sm:text-base text-[#4B2323]">
                {t("about_nepal_stat_unesco") || "UNESCO World Heritage Sites"}
              </p>
            </div>
            <div className="text-center">
              <div className="font-garamond text-3xl sm:text-4xl font-bold text-[#B94B4B] mb-2">
                30M
              </div>
              <p className="font-links text-sm sm:text-base text-[#4B2323]">
                {t("about_nepal_stat_population") || "Population"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure & Tourism Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-[#4B2323] mb-6">
                {t("about_nepal_adventure_title") || "Adventure Capital"}
              </h2>
              <p className="font-links text-lg text-[#4B2323] mb-6 leading-relaxed">
                {t("about_nepal_adventure_desc1") ||
                  "Nepal offers some of the world's most spectacular trekking routes. From the famous Everest Base Camp trek to the remote Manaslu Circuit, adventurers can experience the raw beauty of the Himalayas."}
              </p>
              <p className="font-links text-lg text-[#4B2323] leading-relaxed">
                {t("about_nepal_adventure_desc2") ||
                  "Beyond trekking, Nepal offers white-water rafting, jungle safaris in Chitwan National Park, paragliding, and mountaineering. It's truly a playground for adventure enthusiasts."}
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/about-nepal/1.jpg"
                alt={t("about_nepal_trekking_alt") || "Nepal Trekking"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food & Hospitality Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7ECD8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden lg:order-first">
              <Image
                src="/images/about-nepal/5.jpg"
                alt={t("about_nepal_food_alt") || "Nepal Food"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-[#4B2323] mb-6">
                {t("about_nepal_hospitality_title") || "Warmth & Flavors"}
              </h2>
              <p className="font-links text-lg text-[#4B2323] mb-6 leading-relaxed">
                {t("about_nepal_hospitality_desc1") ||
                  "Nepalese hospitality is legendary. The phrase 'Atithi Devo Bhava' (Guest is God) is deeply rooted in the culture. Visitors are welcomed with open arms and genuine warmth."}
              </p>
              <p className="font-links text-lg text-[#4B2323] leading-relaxed">
                {t("about_nepal_hospitality_desc2") ||
                  "Nepalese cuisine reflects the country's diversity. From Dal Bhat (rice and lentils) to momos (dumplings), from Newari delicacies to Tibetan-influenced dishes, the food tells the story of Nepal's rich cultural heritage."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-garamond text-3xl sm:text-4xl font-semibold text-[#4B2323] mb-6">
            {t("about_nepal_cta_title") || "Experience Nepal with Us"}
          </h2>
          <p className="font-links text-lg text-[#4B2323] mb-8 leading-relaxed">
            {t("about_nepal_cta_desc") ||
              "Let Kathmandu Mandala be your gateway to discovering the wonders of Nepal. From visa services to guided tours, we ensure your journey to Nepal is seamless and unforgettable."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#B94B4B] text-white px-8 py-3 rounded-lg font-links font-semibold hover:bg-[#9A2731] transition-colors"
              onClick={() => router.push("/travel")}
              size="lg"
            >
              {t("about_nepal_cta_explore") || "Explore Travel Packages"}
            </Button>
            <Button
              className="border-2 border-[#B94B4B] text-[#B94B4B] px-8 py-3 rounded-lg font-links font-semibold hover:bg-[#B94B4B] hover:text-white transition-colors"
              variant="outline"
              onClick={() => router.push("/contact")}
              size="lg"
            >
              {t("about_nepal_cta_contact") || "Contact Us"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutNepal;
