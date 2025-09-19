"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { useEffect, useState } from "react";
import { packageService } from "@/api/services/packageService";
import { useRouter } from "next/navigation";
import TravelSkeleton from "@/app/components/skeletons/travel-skeleton";
import Component2Skeleton from "../skeletons/component-2-skeleton";

function Component2() {
  const { t, locale, isLoaded } = useTranslation();
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
      <div className="relative z-10 max-w-7xl px-18 max-sm:px-8 mx-auto">
        <h2 className="text-center font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-10">
          {t("travel_offers_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id || idx}
              className="bg-[#F7ECD8] rounded-xl shadow p-6 flex flex-col hover:cursor-pointer"
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
                {pkg.title}
                <br />
                <span className="font-semibold">
                  {pkg.overview?.replace(/<[^>]+>/g, "")}
                </span>
              </h3>
              <p
                className="text-[#4B2323] font-links text-sm mb-4"
                dangerouslySetInnerHTML={{
                  __html: pkg.sub_title || "",
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
  );
}

export default Component2;
