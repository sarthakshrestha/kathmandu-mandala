"use client";
import Image from "next/image";
import { FileText, CreditCard, RotateCcw } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";
import LoaderComponent from "../reusable/loader-component";

export default function Component1() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return <LoaderComponent />;
  }

  return (
    <section className="bg-[#F7ECD8] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="font-garamond text-2xl md:text-4xl lg:text-5xl text-[#4B2323] mb-4 leading-tight">
            {t("welcome")}
            <br />
            <span className="font-garamond">{t("partner")}</span>
          </h2>
          <p className="text-[#4B2323] font-links text-base md:text-lg mb-6">
            {t("visa_paragraph")}
          </p>
          <div className="mb-6">
            <h3 className="font-garamond text-xl text-[#4B2323] mb-4">
              {t("important_notes")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#4B2323] mt-1" />
                <div>
                  <span className="font-semibold text-[#4B2323]">
                    {t("accepted_documents")}
                  </span>
                  <div className="text-[#4B2323] text-sm">
                    {t("documents_list")}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-[#4B2323] mt-1" />
                <div>
                  <span className="font-semibold text-[#4B2323]">
                    {t("payment_info")}
                  </span>
                  <div className="text-[#4B2323] text-sm">
                    {t("payment_details")}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <RotateCcw className="w-6 h-6 text-[#4B2323] mt-1" />
                <div>
                  <span className="font-semibold text-[#4B2323]">
                    {t("status_tracking")}
                  </span>
                  <div className="text-[#4B2323] text-sm">
                    {t("status_details")}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="inline-block bg-[#D6A346] hover:bg-[#c9a13e] text-zinc-900 font-links font-semibold px-6 py-3 rounded-lg shadow transition text-base mt-2"
          >
            {t("download")}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:w-[600px]">
          {/* Left: Large image */}
          <div className="md:w-[60%] w-full aspect-square relative">
            <Image
              src="/images/Temple.png"
              alt="Patan Square"
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 360px"
            />
          </div>
          {/* Right: Two stacked images */}
          <div className="md:w-[40%] w-full flex flex-col gap-4">
            <div className="w-full aspect-square relative">
              <Image
                src="/images/Trek.png"
                alt="Trekking"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </div>
            <div className="w-full aspect-square relative">
              <Image
                src="/images/Window.png"
                alt="Plane Window"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
