"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useTranslation } from "@/app/hooks/use-translation";

export default function TravelCarousel() {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const images = [
    {
      src: "/images/places/Place1.png",
      alt: t("card1_title") || "Travel Image 1",
    },
    {
      src: "/images/places/Place2.png",
      alt: t("card2_title") || "Travel Image 2",
    },
    {
      src: "/images/places/Place3.png",
      alt: t("card3_title") || "Travel Image 3",
    },
    {
      src: "/images/places/Place4.png",
      alt: t("card4_title") || "Travel Image 4",
    },
  ];

  const cards = [
    {
      img: "/images/places/Place1.png",
      title: t("card1_title"),
      days: t("card1_days"),
      desc: t("card1_desc"),
      price: t("card1_price"),
      alt: t("card1_title"),
      daysClass: "font-semibold",
    },
    {
      img: "/images/places/Place2.png",
      title: t("card2_title"),
      days: t("card2_days"),
      desc: t("card2_desc"),
      price: t("card2_price"),
      alt: t("card2_title"),
      daysClass: "font-semibold",
    },
    {
      img: "/images/places/Place3.png",
      title: t("card3_title"),
      days: t("card3_days"),
      desc: t("card3_desc"),
      price: t("card3_price"),
      alt: t("card3_title"),
      daysClass: "font-semibold",
    },
  ];

  // Sync activeIdx with carousel
  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setActiveIdx(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  React.useEffect(() => {
    if (!carouselApi) return;
    carouselApi.on("select", onSelect);
    setActiveIdx(carouselApi.selectedScrollSnap());
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, onSelect]);

  // Dot click handler
  const handleDotClick = (idx: number) => {
    setActiveIdx(idx);
    carouselApi?.scrollTo(idx);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-0 max-sm:px-8">
      <Carousel className="relative" setApi={setCarouselApi}>
        <div className="flex max-sm:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem
              key={idx}
              className="flex justify-center items-center"
            >
              <div className="w-full h-[250px] sm:h-[400px] relative rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 600px"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Mobile Dots */}
      <div className="flex justify-center items-center mt-4 sm:hidden">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`mx-1 transition-all duration-200 rounded-full bg-[#B94B4B] ${
              activeIdx === idx ? "w-8 h-2" : "w-2 h-2 opacity-50"
            }`}
            aria-label={`Go to image ${idx + 1}`}
            style={{ border: "none" }}
          />
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-3xl sm:text-4xl font-garamond font-semibold mb-4 text-[#4B2323] text-left">
          {t("hero_title")} {t("hero_subtitle")}
        </h1>
        <p className="text-[#4B2323] text-base sm:text-lg mb-6 text-left">
          {t("hero_paragraph")}
        </p>
      </div>
      <h3 className="font-garamond text-3xl mt-8 font-semibold">
        Trip plans in Nepal
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#F7ECD8] rounded-xl shadow p-6 flex flex-col mt-6"
          >
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden bg-[#F7ECD8]">
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <h3 className="font-garamond text-2xl sm:text-2xl text-[#4B2323] mb-2 font-semibold">
              {card.title}
              <br />
              <span className={card.daysClass}>{card.days}</span>
            </h3>
            <p className="text-[#4B2323] font-links text-sm mb-4">
              {card.desc}
            </p>
            <span className="text-[#B94B4B] font-garamond text-2xl font-semibold mt-auto">
              {card.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
