"use client";
import React, { useState, useEffect, useCallback } from "react";
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
import { packageService } from "@/api/services/packageService";
import { useParams } from "next/navigation";
import SingleTravelSkeleton from "@/app/components/skeletons/single-travel-skeleton";
import PackageDialog from "@/app/components/travel/send-inqury-package-dialog";

function extractImageUrls(html: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const urls: string[] = [];
  let match;
  while ((match = imgRegex.exec(html))) {
    urls.push(match[1]);
  }
  return urls;
}

export default function TravelCarousel() {
  const { t } = useTranslation();
  const params = useParams();
  const slug =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : "";

  const [packageData, setPackageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Carousel state
  const [activeIdx, setActiveIdx] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    async function fetchPackage() {
      try {
        if (slug) {
          const res = await packageService.getPackageSlug(slug);
          setPackageData(res.data);
        }
      } catch (error) {
        setPackageData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchPackage();
  }, [slug]);

  // Extract images from description HTML
  const bodyImages = packageData?.description
    ? extractImageUrls(packageData.description)
    : [];

  // Carousel logic
  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setActiveIdx(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.on("select", onSelect);
    setActiveIdx(carouselApi.selectedScrollSnap());
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, onSelect]);

  const handleDotClick = (idx: number) => {
    setActiveIdx(idx);
    carouselApi?.scrollTo(idx);
  };

  // cmomit

  if (loading)
    return (
      <div className="bg-[#FFF9EE]">
        <SingleTravelSkeleton />
      </div>
    );
  if (!packageData) return <div>Package not found.</div>;

  return (
    <div className="bg-[#FFF9EE]">
      <div className="w-full max-w-5xl mx-auto py-8 px-8 sm:px-8 max-sm:px-8 bg-[#FFF9EE]">
        {/* Only show carousel if there are images */}
        {bodyImages.length > 0 && (
          <>
            <Carousel className="relative" setApi={setCarouselApi}>
              <div className="flex max-sm:hidden">
                <CarouselPrevious />
                <CarouselNext />
              </div>
              <CarouselContent>
                {bodyImages.map((src, idx) => (
                  <CarouselItem
                    key={idx}
                    className="flex justify-center items-center"
                  >
                    <div className="w-full h-[250px] sm:h-[400px] relative rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={packageData?.title || `Travel Image ${idx + 1}`}
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
              {bodyImages.map((_, idx) => (
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
          </>
        )}
        <div className="mt-10">
          <h1 className="text-3xl sm:text-4xl font-garamond font-semibold mb-4 text-[#4B2323] text-left">
            {packageData.title}
          </h1>
          <p className="text-[#4B2323] text-base sm:text-lg mb-6 text-left">
            {packageData.price}
          </p>
        </div>
        <div className="mb-8">
          <PackageDialog packageId={packageData?.id} />
        </div>
        <div className="prose max-w-none text-[#4B2323]">
          {/* Render the HTML body safely */}
          <div
            dangerouslySetInnerHTML={{ __html: packageData.description || "" }}
          />
        </div>
      </div>
    </div>
  );
}
