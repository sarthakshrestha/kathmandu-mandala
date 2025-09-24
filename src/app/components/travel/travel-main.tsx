"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { useEffect, useState } from "react";
import { packageService } from "@/api/services/packageService";
import { useRouter } from "next/navigation";
import Head from "next/head";
import TravelSkeleton from "../skeletons/travel-skeleton";

function TravelMain() {
  const { t, isLoaded, locale } = useTranslation();
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchPackages() {
      try {
        const res = await packageService.getPackages();
        setPackages(res.data || []);
      } catch (error) {
        setPackages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  const metaKeywords = packages
    .map((pkg) => pkg.meta_keywords)
    .filter(Boolean)
    .join(", ");

  if (!isLoaded || loading) {
    return <TravelSkeleton />;
  }

  // Function to get translated content based on locale
  const getTranslatedContent = (pkg: any, field: string) => {
    if (pkg.translations && Array.isArray(pkg.translations)) {
      // Try to find translation matching current locale
      const translation = pkg.translations.find(
        (trans: any) => trans.language === locale
      );

      if (translation && translation[field]) {
        return translation[field];
      }

      // If not found, try English fallback
      const fallbackTranslation = pkg.translations.find(
        (trans: any) => trans.language === "en"
      );

      if (fallbackTranslation && fallbackTranslation[field]) {
        return fallbackTranslation[field];
      }

      // If no matching translations, use the first one if available
      if (pkg.translations.length > 0 && pkg.translations[0][field]) {
        return pkg.translations[0][field];
      }
    }

    // Fall back to the default field value
    return pkg[field] || "";
  };

  // Function to get package image (first from API or fallback)
  const getPackageImage = (pkg: any, idx: number) => {
    if (pkg.image && pkg.image.length > 0 && pkg.image[0].file_url) {
      return pkg.image[0].file_url;
    }
    // Fallback to static images (cycling through 6 images)
    return `/images/places/Place${(idx % 6) + 1}.png`;
  };

  return (
    <>
      <Head>
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      </Head>
      <section className="relative pt-10 max-sm:pt-12 max-sm:pb-4 max-sm:px-8 px-2 sm:px-6 pb-24 lg:px-18 overflow-hidden bg-[#FFF9EE]">
        <div className="relative z-10 max-w-6xl lg:px-18 mx-auto">
          <div className="text-center mb-2">
            <span className="inline-block text-[#B94B4B] px-4 py-1 rounded-full font-garamond text-lg font-semibold">
              {t("travel_list") || "Travel list"}
            </span>
          </div>
          <h2 className="text-center font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4B2323] mb-10">
            {t("travel_offers_title") || "Our Travel Offers"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages && packages.length > 0 ? (
              packages.map((pkg, idx) => {
                const title = getTranslatedContent(pkg, "title");
                const subTitle = getTranslatedContent(pkg, "sub_title");

                console.log("Package title:", title, "Original:", pkg.title);

                return (
                  <div
                    key={pkg.id || idx}
                    className="bg-[#F7ECD8] rounded-xl p-6 flex flex-col shadow-sm hover:cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() =>
                      pkg.slug && router.push(`/travel/${pkg.slug}`)
                    }
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
                    <h3 className="font-garamond text-2xl text-[#4B2323] mb-2 font-semibold">
                      {title ? (
                        <span>{title}</span>
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: pkg.title || "",
                          }}
                        />
                      )}
                    </h3>
                    {subTitle && (
                      <p className="text-[#4B2323] font-links text-sm mb-4">
                        {subTitle.replace(/<[^>]+>/g, "")}
                      </p>
                    )}
                    <span className="text-[#B94B4B] font-garamond text-2xl font-semibold mt-auto">
                      {pkg.price && pkg.price.includes("$")
                        ? pkg.price
                        : `€${pkg.price}`}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-[#B94B4B] font-garamond text-2xl font-semibold py-12">
                {t("no_package_found") || "No packages found"}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelMain;
