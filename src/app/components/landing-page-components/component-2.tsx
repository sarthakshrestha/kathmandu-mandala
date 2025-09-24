"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { useEffect, useState } from "react";
import { packageService } from "@/api/services/packageService";
import { useRouter } from "next/navigation";
import Component2Skeleton from "../skeletons/component-2-skeleton";

function Component2() {
  const { t, isLoaded, locale } = useTranslation();
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchPackages() {
      try {
        const res = await packageService.getPackages();
        setPackages(res.data ? res.data.slice(0, 3) : []);
      } catch (error) {
        setPackages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  if (!isLoaded || loading) {
    return <Component2Skeleton />;
  }

  // Function to get package image (first from API or fallback)
  const getPackageImage = (pkg: any, idx: number) => {
    if (pkg.image && pkg.image.length > 0 && pkg.image[0].file_url) {
      return pkg.image[0].file_url;
    }
    return `/images/places/Place${(idx % 6) + 1}.png`;
  };

  // Function to get translated content based on locale
  const getTranslatedContent = (pkg: any, field: string) => {
    if (!pkg) return "";

    // If translations exist in data
    if (pkg.translations && Array.isArray(pkg.translations)) {
      // Try to find translation matching current locale
      const translation = pkg.translations.find(
        (trans: any) => trans.language === locale
      );

      // If found, use it
      if (translation && translation[field]) {
        return translation[field];
      }

      // If not found, try English fallback
      const fallbackTranslation = pkg.translations.find(
        (trans: any) => trans.language === "en"
      );

      // If fallback found, use it
      if (fallbackTranslation && fallbackTranslation[field]) {
        return fallbackTranslation[field];
      }

      // Last resort: use first translation if it exists
      if (pkg.translations.length > 0 && pkg.translations[0][field]) {
        return pkg.translations[0][field];
      }
    }

    // If no translations found, return the field itself
    return pkg[field] || "";
  };

  return (
    <section className="relative py-24 max-sm:py-12 max-sm:px-4 px-2 sm:px-6 lg:px-18 overflow-hidden bg-[#FFF9EE]">
      {/* Decorative background pattern */}
      <Image
        src="/images/background/BackgroundPattern.png"
        alt="Background Pattern"
        fill
        className="object-cover object-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
        priority
      />
      <div className="relative z-10 max-w-7xl px-8 max-sm:px-8 mx-auto">
        <h2 className="text-center font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-10">
          {t("travel_offers_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            // Instead of using the hook here, use the helper function
            const title = getTranslatedContent(pkg, "title");
            const subTitle = getTranslatedContent(pkg, "sub_title");
            const price = pkg.price;

            return (
              <div
                key={pkg.id || idx}
                className="bg-[#F7ECD8] rounded-xl shadow p-6 flex flex-col hover:cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => pkg.slug && router.push(`/travel/${pkg.slug}`)}
              >
                <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={getPackageImage(pkg, idx)}
                    alt={title || "Travel package"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <h3 className="font-garamond text-2xl sm:text-2xl text-[#4B2323] mb-2 font-semibold">
                  {title || ""}
                </h3>
                {subTitle && (
                  <p className="text-[#4B2323] font-links text-sm mb-4">
                    {subTitle.replace(/<[^>]+>/g, "")}
                  </p>
                )}
                <span className="text-[#B94B4B] font-garamond text-2xl font-semibold mt-auto">
                  {price && price.includes("$")
                    ? price
                    : price
                    ? `€${price}`
                    : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Component2;
