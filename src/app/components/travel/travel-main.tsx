"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { useEffect, useState } from "react";
import { packageService } from "@/api/services/packageService";
import { useRouter } from "next/navigation";
import Head from "next/head";
import TravelSkeleton from "../skeletons/travel-skeleton";

function TravelMain() {
  const { t, isLoaded } = useTranslation();
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

  return (
    <>
      <Head>
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      </Head>
      <section className="relative py-10 max-sm:py-12 max-sm:px-4 px-2 sm:px-6 pb-24 lg:px-18 overflow-hidden bg-[#FFF9EE]">
        <div className="relative z-10 max-w-7xl px-18 max-sm:px-8 mx-auto">
          <div className="text-center mb-2">
            <span className="inline-block text-[#B94B4B]  px-4 py-1 rounded-full font-garamond text-lg font-semibold">
              Travel list
            </span>
          </div>
          <h2 className="text-center font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4B2323] mb-10">
            {t("travel_offers_title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.id || idx}
                className="bg-[#F7ECD8] rounded-xl  p-6 flex flex-col shadow-sm hover:cursor-pointer"
                onClick={() => pkg.slug && router.push(`/travel/${pkg.slug}`)}
              >
                <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/places/Place${idx + 1}.png`}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <h3 className="font-garamond text-2xl sm:text-2xl text-[#4B2323] mb-2 font-semibold">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: pkg.title || "",
                    }}
                  />
                  <br />
                  <span className="font-semibold">
                    {pkg.overview?.replace(/<[^>]+>/g, "")}
                  </span>
                </h3>
                <p
                  className="text-[#4B2323] font-links text-sm mb-4"
                  dangerouslySetInnerHTML={{
                    __html: pkg.subt_title || "",
                  }}
                />
                <span className="text-[#B94B4B] font-garamond text-2xl font-semibold mt-auto">
                  {pkg.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelMain;
