"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import LoaderComponent from "../reusable/loader-component";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero/1.jpg",
    titleKey: "welcome",
    descriptionKey: "visa_paragraph",
    primaryButtonText: "download",
    primaryButtonHref: "/visa",
    secondaryButtonText: "discover",
    secondaryButtonHref: "/travel",
  },
  {
    id: 2,
    image: "/images/hero/2.jpg",
    titleKey: "travel_offers_title",
    descriptionKey: "travel_description",
    primaryButtonText: "explore_packages",
    primaryButtonHref: "/travel",
    secondaryButtonText: "learn_more",
    secondaryButtonHref: "/about",
  },
  {
    id: 3,
    image: "/images/hero/5.jpg",
    titleKey: "restaurant_title",
    descriptionKey: "restaurant_paragraph",
    primaryButtonText: "download_menu",
    primaryButtonHref: "/files/Menu.pdf",
    secondaryButtonText: "visit_restaurant",
    secondaryButtonHref: "/restaurant",
  },
];

function HeroCarousel() {
  const { t, isLoaded } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Sync activeIndex with carousel
  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setActiveIndex(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  React.useEffect(() => {
    if (!carouselApi) return;
    carouselApi.on("select", onSelect);
    setActiveIndex(carouselApi.selectedScrollSnap());
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, onSelect]);

  // Dot click handler
  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    carouselApi?.scrollTo(idx);
  };

  // Auto-slide functionality
  React.useEffect(() => {
    if (!carouselApi) return;

    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % heroSlides.length;
      carouselApi.scrollTo(nextIndex);
    }, 6500); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [carouselApi, activeIndex]);

  if (!isLoaded) {
    return <LoaderComponent />;
  }

  return (
    <div className="relative w-full overflow-hidden lg:-mt-12">
      <Carousel
        className="w-full "
        setApi={setCarouselApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ">
          {heroSlides.map((slide, idx) => (
            <CarouselItem key={slide.id} className="relative w-full h-full">
              {/* Background Image - Positioned behind content */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={`Hero slide ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Centered Content */}
              <div className="relative z-10 flex items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-[#F7ECD8] font-garamond text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
                    {t(slide.titleKey)}
                  </h1>
                  <p className="text-[#F7ECD8] font-links text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 drop-shadow max-w-2xl mx-auto leading-relaxed">
                    {t(slide.descriptionKey)}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a
                      href={slide.primaryButtonHref}
                      className="bg-[#D6A346] hover:bg-[#c9a13e] text-zinc-900 font-links font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {t(slide.primaryButtonText)}
                    </a>
                    <a
                      href={slide.secondaryButtonHref}
                      className="text-white font-links font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all duration-300 text-base sm:text-lg border border-white/30 hover:border-white/50"
                    >
                      {t(slide.secondaryButtonText)}
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-[#D6A346] w-6 sm:w-8"
                  : "bg-white/60 w-2 sm:w-3 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
