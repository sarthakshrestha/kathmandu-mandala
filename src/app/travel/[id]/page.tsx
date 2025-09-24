"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
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
import ScrollTabPortal from "@/components/portals/scroll-tab-portal";
import IncludeExcludePortal from "@/components/portals/include-exclude-portal";
import TourPlanPortal from "@/components/portals/tour-plan-portal";

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

  // Refs for scrolling
  const overviewRef = useRef<HTMLDivElement>(null);
  const tourPlanRef = useRef<HTMLDivElement>(null);
  const includeExcludeRef = useRef<HTMLDivElement>(null);

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

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "overview" && overviewRef.current) {
      // Scroll with offset to account for navbar
      window.scrollTo({
        top: overviewRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    } else if (sectionId === "tour-plan" && tourPlanRef.current) {
      window.scrollTo({
        top: tourPlanRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    } else if (sectionId === "include-exclude" && includeExcludeRef.current) {
      window.scrollTo({
        top: includeExcludeRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };
  if (loading)
    return (
      <div className="bg-[#FFF9EE]">
        <SingleTravelSkeleton />
      </div>
    );
  if (!packageData)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9EE]">
        <div className="text-[#B94B4B] font-garamond text-2xl font-semibold text-center">
          {t("package_not_found")}
        </div>
      </div>
    );

  // Format tour plan items for TourPlanPortal
  const tourPlanItems =
    packageData?.tour_plan?.map((plan: any, idx: number) => ({
      key: `day${idx + 1}`,
      title: plan.title,
      description: plan.description,
    })) || [];

  // Format included/excluded items
  const includedItems =
    packageData?.included?.map((item: any) => item.item) || [];
  const excludedItems =
    packageData?.excluded?.map((item: any) => item.item) || [];

  // Create tabs for the scroll tabs component
  const tabs = [
    {
      value: "overview",
      label: t("trek_tab_detail") || "Trip detail",
      sectionId: "overview",
    },
    {
      value: "plan",
      label: t("trek_tab_plan") || "Tour Plan",
      sectionId: "tour-plan",
    },
    {
      value: "include",
      label: t("trek_tab_include") || "Included/Exclude",
      sectionId: "include-exclude",
    },
  ];

  return (
    <div className="bg-[#FFF9EE]">
      <div className="w-full max-w-6xl mx-auto max-sm:py-0 py-8 px-4 sm:px-8 bg-[#FFF9EE]">
        {/* Carousel Section */}
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

        {/* Tab Navigation */}
        <div className="mt-8 w-full">
          <ScrollTabPortal tabs={tabs} onTabClick={scrollToSection} />
        </div>

        {/* Main Grid Layout */}
        <div className="w-full flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-8 items-start mt-10">
          {/* Content Column */}
          <div className="flex flex-col w-full">
            {/* Overview Section */}
            <div ref={overviewRef} id="overview" className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-garamond font-semibold mb-4 text-[#4B2323] text-left">
                {packageData.title}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    {t("trek_detail_tour_type") || "Tour Type"}
                  </span>
                  <span className="font-links font-semibold text-base">
                    {packageData.type || "Standard"}
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    {t("trek_detail_max_group_size") || "Max Group Size"}
                  </span>
                  <span className="font-links font-semibold text-base">
                    {packageData.max_group_size || "10"}
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    {t("trek_detail_age_requirement") || "Age Requirement"}
                  </span>
                  <span className="font-links font-semibold text-base">
                    {packageData.min_age || "All ages"}
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    {t("trek_detail_operated_in") || "Operated In"}
                  </span>
                  <span className="font-links font-semibold text-base">
                    {packageData.operated_in || "Nepal"}
                  </span>
                </div>
              </div>
              {/* Overview Content */}
              <div className="prose max-w-none text-[#4B2323]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: packageData.overview || "",
                  }}
                />
              </div>
            </div>

            {/* Tour Plan Section */}
            {tourPlanItems.length > 0 && (
              <div ref={tourPlanRef} id="tour-plan" className="mb-10">
                <TourPlanPortal
                  items={tourPlanItems}
                  sectionTitle={t("trek_tab_plan") || "Tour Plan"}
                />
              </div>
            )}

            {/* Include/Exclude Section */}
            {(includedItems.length > 0 || excludedItems.length > 0) && (
              <div
                ref={includeExcludeRef}
                id="include-exclude"
                className="mb-10"
              >
                <IncludeExcludePortal
                  include={includedItems}
                  exclude={excludedItems}
                  title={t("trek_tab_include") || "Included/Exclude"}
                />
              </div>
            )}

            {/* Description Section */}
            <div className="prose max-w-none text-[#4B2323] mb-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: packageData.description || "",
                }}
              />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="w-full sticky top-24 self-start">
            <div className="bg-[#F7ECD8] rounded-xl p-6 shadow-sm">
              <h2 className="font-garamond text-xl font-semibold mb-4 text-[#4B2323]">
                {t("package_price_details") || "Price Details"}
              </h2>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#4B2323] font-links">
                  {t("package_price") || "Price:"}
                </span>
                <span className="text-[#B94B4B] font-garamond text-2xl font-semibold">
                  € {packageData.price}
                </span>
              </div>
              <PackageDialog packageId={packageData?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
