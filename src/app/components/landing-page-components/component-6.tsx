"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { Pickaxe } from "lucide-react";
import { Hourglass } from "lucide-react";

const products = [
  {
    img: "https://placehold.co/600x400",
    title: "Nepali Farmer Shilajit Resin - 30g",
    price: "Rs 7,000",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Himalayan Herbal Tea - 100g",
    price: "Rs 350",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Organic Turmeric Powder - 200g",
    price: "Rs 450",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Traditional Khukuri Knife - Handmade",
    price: "Rs 5,500",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Tibetan Singing Bowl - Medium Size",
    price: "Rs 2,200",
    action: "Enquiry",
  },
];

export default function Component6() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <section className="relative bg-[#4B2323] py-20 px-2 sm:px-6 overflow-hidden max-sm:px-8 ">
      {/* Decorative Mandala Patterns */}
      <Image
        src="/images/background/BackgroundPattern.png"
        alt={t("background_pattern_alt") || "Background Pattern"}
        fill
        className="object-cover object-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
        priority
      />
      <div className="relative z-10 lg:px-18 mx-auto flex flex-col gap-8 max-w-[85rem]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-garamond text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight">
              {t("authentic_treasures_title") || "Authentic Nepali Treasures"}
            </h2>
            <p className="text-white/80 font-links text-base md:text-lg">
              {t("authentic_treasures_desc") ||
                "Discover handcrafted products from Nepal, blending tradition, culture, and artistry into everyday life."}
            </p>
          </div>
          {/* <a
            href="#"
            className="text-white font-links font-semibold text-base hover:underline self-end md:self-center"
          >
            {t("view_all") || "View all"}
          </a> */}
        </div>
        {/* Products Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#FFF9EE] rounded-xl overflow-hidden flex flex-col shadow-md"
            >
              <div className="w-full h-[220px] relative flex flex-col items-center justify-center">
                <Hourglass size={64} className="text-[#B94B4B] mb-2" />
                <span className="text-[#B94B4B] font-links font-semibold">
                  {t("coming_soon") || "Coming Soon"}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="font-links text-[#23233B] text-base font-medium mb-2">
                  {product.title}
                </div>
                <div className="flex items-center gap-2 text-[#B94B4B] font-links text-sm font-semibold">
                  {product.price}
                  <span className="mx-2 text-[#B94B4B]">|</span>
                  <span>{t("enquiry") || product.action}</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex items-center justify-center w-full py-16">
          <div className="bg-[#4B2323] rounded-xl px-8 py-6 flex items-center justify-center">
            <span className="text-white font-garamond text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide">
              {t("coming_soon") || "COMING SOON"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
