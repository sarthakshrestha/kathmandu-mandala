"use client";
import { Facebook, Github, Linkedin, X, Hand, Dribbble } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { z } from "zod";
export default function Footer() {
  const { t, locale, isLoaded } = useTranslation();
  const emailSchemaFixed = z.email({ message: "Invalid email address" });
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (!isLoaded) {
    return null;
  }

  function handleNewsletterSubmit(
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    setError: (msg: string) => void,
    t: (key: string) => string
  ) {
    e.preventDefault();
    const emailSchemaFixed = z.email({ message: "Invalid email address" });
    const result = emailSchemaFixed.safeParse(email);
    if (!result.success) {
      setError(t("footer_newsletter_invalid_email") || "Invalid email address");
    } else {
      setError("");
    }
  }

  return (
    <footer className="bg-[#FFF9EE]  pt-12 pb-6 max-sm:px-8 ">
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between gap-10 ">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center max-sm:items-start gap-4 mb-5">
            <img
              src="/images/icons/LogoHorizontal.svg"
              alt={t("navbar_logo_alt")}
              className="w-auto h-12 max-sm:w-auto max-sm:h-16 max-sm:my-4"
            />
          </div>
          <p className="text-[#23233B] font-links text-base mb-6 max-w-md">
            {t("footer_description")}
          </p>
          <div className="flex flex-row flex-wrap gap-8 font-links font-semibold text-[#23233B] mb-2 text-sm max-sm:flex-col max-sm:-mb-5 max-sm:gap-5">
            {/* <a href="/" className="hover:underline">
              {t("navbar_menu_home") || "Home"}
            </a>
            <a href="/visa" className="hover:underline">
              {t("navbar_menu_visa_service") || "Visa service"}
            </a>
            <a href="/travel" className="hover:underline">
              {t("navbar_menu_travel_offers") || "Travel offers"}
            </a>
            <a href="/restaurant" className="hover:underline">
              {t("navbar_menu_restaurant") || "Restaurant"}
            </a>
            <a href="/courier" className="hover:underline">
              {t("navbar_menu_courier_service") || "Courier service"}
            </a>
            <a href="/about-nepal" className="hover:underline">
              {t("navbar_menu_about_nepal") || "About Nepal"}
            </a> */}
            <a href="/privacy" className="hover:underline">
              {t("footer_privacy")}
            </a>
            <a href="#" className="hover:underline">
              {t("footer_terms")}
            </a>
            <a href="/about" className="hover:underline">
              {t("footer_about")}
            </a>
            <a href="/impressum" className="hover:underline">
              {t("footer_impressum")}
            </a>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start md:items-end">
          <div className="flex-1 flex flex-col items-start md:items-start">
            <span className="text-[#D6A346] font-links md:items-start md:justify-end md:flex-row-reverse font-semibold mb-3">
              {t("footer_newsletter_title")}
            </span>
            <form
              className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl md:justify-end items-center"
              onSubmit={(e) => handleNewsletterSubmit(e, email, setError, t)}
            >
              <div className="flex flex-col w-full max-w-xs">
                <input
                  type="email"
                  placeholder={t("footer_newsletter_placeholder")}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full font-links text-[#23233B] focus:outline-none focus:ring-2 focus:ring-[#D6A346] bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span
                  className="text-red-500 text-sm font-links mt-1 min-h-[1.5em] block"
                  style={{ minHeight: "1.5em" }}
                >
                  {error}
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#D6A346] hover:bg-[#c9a13e] text-[#23233B] font-links mb-5 font-semibold px-6 py-2 rounded-lg shadow transition"
                style={{ height: "48px" }} // match input height for perfect alignment
              >
                {t("footer_newsletter_button")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto mt-10 mb-1 items-end flex justify-end ">
        <a
          href="https://maps.app.goo.gl/DUDPAbTTmdvyo9bXA"
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
            <FaXTwitter className="w-6 h-6 text-[#23233B] hover:text-[#D6A346]" />
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
