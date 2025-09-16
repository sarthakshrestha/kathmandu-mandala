"use client";
import Image from "next/image";
import { CheckCircle, Clock, Loader2 } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";
import RegisterFormDialog from "../visa-page-components/register-form-dialog";
import VisaFAQ from "../visa-page-components/visa-faq";
import DownloadFormDialog from "../visa-page-components/download-form-dialog";

export default function RegistrationMain() {
  const { t, isLoaded } = useTranslation();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <section className="bg-[#FFF9EE] min-h-screen py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center max-sm:px-8">
      <div className="max-w-4xl w-full mx-auto">
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src="/images/VisaPlaceholder.jpg"
            alt={t("hero_image_alt")}
            width={800}
            height={400}
            className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover"
            priority
          />
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Left: Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-garamond text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#23233B]">
              {t("pre_registration_heading")}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  {t("entries") || "Entries"}
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  {t("single") || "Single"}
                </span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  {t("maximum_stay") || "Maximum Stay"}
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  90 days
                </span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  {t("validity") || "Validity"}
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  15 days
                </span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  {t("travel_purpose") || "Travel Purpose"}
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  {t("tourism_business") || "Tourism, Business"}
                </span>
              </div>
            </div>
            <div className="text-[#23233B] text-sm sm:text-base mb-4 sm:mb-6">
              {t("pre_registration_paragraph")}
            </div>
            <div>
              <h2 className="font-garamond text-base sm:text-lg mb-2 sm:mb-3 text-[#23233B]">
                {t("important_notes")}
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#B94B4B]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-[#23233B] text-sm sm:text-base">
                    {t("documents_list").split(",")[0] || "Passport"}
                  </span>
                </li>
                <li className="flex items-center gap-2 text-[#B94B4B]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-[#23233B] text-sm sm:text-base">
                    {t("documents_list").split(",")[1] ||
                      "Accommodation details (hotel address)"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right: Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full md:w-[320px] flex flex-col gap-3 sm:gap-4 h-fit mt-4 md:mt-0">
            <DownloadFormDialog />
            <RegisterFormDialog />
          </div>
        </div>
        <VisaFAQ />
      </div>
    </section>
  );
}
