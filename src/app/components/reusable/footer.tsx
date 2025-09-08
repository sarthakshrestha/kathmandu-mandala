"use client";
import { Facebook, Github, Linkedin, X, Hand, Dribbble } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function Footer() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <footer className="bg-[#FFF9EE] w-full pt-12 pb-6 px-4 sm:px-8">
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center max-sm:items-start gap-4 mb-2">
            <img
              src="/images/icons/LogoHorizontal.svg"
              alt={t("navbar_logo_alt")}
              className="w-auto h-12 max-sm:w-auto max-sm:h-16 max-sm:my-4"
            />
          </div>
          <p className="text-[#23233B] font-links text-base mb-6 max-w-md">
            {t("footer_description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-links font-semibold text-[#23233B] mb-8">
            <a href="/privacy" className="hover:underline">
              {t("footer_privacy")}
            </a>
            <a href="#" className="hover:underline">
              {t("footer_imprint")}
            </a>
            <a href="#" className="hover:underline">
              {t("footer_terms")}
            </a>
            <a href="/about" className="hover:underline">
              {t("footer_about")}
            </a>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start md:items-end">
          <span className="text-[#D6A346] font-links font-semibold mb-3">
            {t("footer_newsletter_title")}
          </span>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md md:justify-end">
            <input
              type="email"
              placeholder={t("footer_newsletter_placeholder")}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full font-links text-[#23233B] focus:outline-none focus:ring-2 focus:ring-[#D6A346] bg-white"
            />
            <button
              type="submit"
              className="bg-[#D6A346] hover:bg-[#c9a13e] text-[#23233B] font-links font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              {t("footer_newsletter_button")}
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto mt-10 mb-1 items-end flex justify-end">
        <a
          href="https://share.google/aszykUjjcBVyT1NJz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-links text-base text-[#23233B] hover:underline flex items-center gap-2"
        >
          <span>
            {" "}
            Wilmersdorfer Str. 163, 10585 Berlin, Deutschland – Kathmandu
            Mandala
          </span>
        </a>
      </div>
      {/* Divider */}
      <div className="max-w-[85rem] mx-auto  mb-6 border-t border-gray-300"></div>
      {/* Bottom Section */}
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[#23233B] font-links text-sm mb-4 md:mb-0 text-center w-full md:w-auto">
          {t("footer_copyright")}
        </span>
        <div className="flex flex-wrap justify-center gap-6 mt-2 md:mt-0 w-full md:w-auto">
          <a href="#" aria-label="X">
            <X className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
