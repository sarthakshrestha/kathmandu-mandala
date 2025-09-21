"use client";
import { useTranslation } from "@/app/hooks/use-translation";

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex flex-row items-center gap-2 text-base">
      <span className="font-medium text-[#23233B]">{label}:</span>
      <a href={href} className="text-[#B94B4B] hover:underline">
        {value}
      </a>
    </div>
  );
}

export default function AboutHeader() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  return (
    <header className="bg-[#FFF9EE] py-12 px-2 text-center w-full max-sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-[#B94B4B] font-links text-base font-semibold mb-2">
          {t("about_us")}
        </div>

        <h1 className="font-garamond text-3xl sm:text-5xl mb-4 text-[#23233B]">
          {t("about_company_title")}
        </h1>

        <p className="text-[#23233B]/70 font-links text-base sm:text-lg">
          {t("about_company_subtitle")}
        </p>
      </div>
      <h2 className="font-semibold mb-2 mt-8 font-garamond text-2xl ">
        {t("contact_info_title")}
      </h2>
      <div className="flex flex-col items-center gap-2 mt-2">
        <ContactRow
          label={t("contact_info_email_label")}
          value={t("contact_info_email_value")}
          href="mailto:info@kathmandumandala.de"
        />
        <ContactRow
          label={t("contact_info_cafe_label")}
          value={t("contact_info_cafe_value")}
          href="tel:03091511570"
        />
        <ContactRow
          label={t("contact_info_travel_label")}
          value={t("contact_info_travel_value")}
          href="tel:03091511564"
        />
        <ContactRow
          label={t("contact_info_whatsapp_label")}
          value={t("contact_info_whatsapp_value")}
          href="https://wa.me/491727497932"
        />
      </div>
    </header>
  );
}
