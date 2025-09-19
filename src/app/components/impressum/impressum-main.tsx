"use client";
import { useTranslation } from "@/app/hooks/use-translation";

export default function ImpressumMain() {
  const { t, isLoaded } = useTranslation();

  if (!isLoaded) {
    return (
      <section className="relative py-10 px-2 sm:px-6 lg:px-18 overflow-hidden bg-[#FFF9EE]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[#B94B4B] px-4 py-1 rounded-full font-garamond text-lg font-semibold animate-pulse">
              {t("imprint_title")}
            </span>
          </div>
          <div className="space-y-4">
            <div className="h-8 w-full bg-accent animate-pulse rounded" />
            <div className="h-6 w-full bg-accent animate-pulse rounded" />
            <div className="h-6 w-full bg-accent animate-pulse rounded" />
            <div className="h-6 w-full bg-accent animate-pulse rounded" />
            <div className="h-6 w-full bg-accent animate-pulse rounded" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-10 max-sm:py-12 max-sm:px-4 px-2 sm:px-6 pb-24 lg:px-18 overflow-hidden bg-[#FFF9EE]">
      <div className="relative z-10 max-w-4xl px-4 sm:px-8 mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-[#B94B4B] px-4 py-1 rounded-full font-garamond text-lg font-semibold">
            {t("imprint_title")}
          </span>
        </div>
        <h2 className="text-center font-garamond text-2xl sm:text-3xl lg:text-4xl text-[#4B2323] mb-8 font-semibold">
          {t("imprint_company")}
        </h2>
        <div className="text-[#4B2323] font-links text-base space-y-6">
          <div>
            <strong>{t("imprint_address_label")}:</strong>
            <br />
            {t("imprint_address_value")}
          </div>
          <div>
            <strong>{t("imprint_ceo_label")}:</strong> {t("imprint_ceo_value")}
            <br />
            <strong>{t("imprint_technical_partner_label")}:</strong>{" "}
            {t("imprint_technical_partner_value")}
          </div>
          <div>
            <strong>{t("imprint_contact_label")}:</strong>
            <br />
            {t("imprint_email")}
            <br />
            {t("imprint_cafe_phone")}
            <br />
            {t("imprint_travel_phone")}
            <br />
            {t("imprint_whatsapp")}
          </div>
          <div>
            <strong>{t("imprint_commercial_register")}</strong>
            <br />
            <strong>{t("imprint_vat_id")}</strong>
          </div>
          <div>
            <strong>{t("imprint_content_responsible")}</strong>
          </div>
          <hr className="my-6 border-[#B94B4B]" />
          <div>
            <strong>{t("imprint_liability_content_title")}:</strong>
            <br />
            {t("imprint_liability_content_text")}
          </div>
          <div>
            <strong>{t("imprint_liability_links_title")}:</strong>
            <br />
            {t("imprint_liability_links_text")}
          </div>
          <div>
            <strong>{t("imprint_copyright_title")}:</strong>
            <br />
            {t("imprint_copyright_text")}
          </div>
        </div>
      </div>
    </section>
  );
}
