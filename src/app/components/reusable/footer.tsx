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
          <h2 className="text-2xl font-garamond text-[#D6A346] mb-2">
            {t("footer_brand")}
          </h2>
          <p className="text-[#23233B] font-links text-base mb-6 max-w-md">
            {t("footer_description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-links font-semibold text-[#23233B] mb-8">
            <a href="#" className="hover:underline">
              {t("footer_privacy")}
            </a>
            <a href="#" className="hover:underline">
              {t("footer_imprint")}
            </a>
            <a href="#" className="hover:underline">
              {t("footer_terms")}
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
      {/* Divider */}
      <div className="max-w-[85rem] mx-auto mt-10 mb-6 border-t border-gray-300"></div>
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
          <a href="#" aria-label="GitHub">
            <Github className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
          </a>
          <a href="#" aria-label="HandPeace">
            <Hand className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
          </a>
          <a href="#" aria-label="Dribbble">
            <Dribbble className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
