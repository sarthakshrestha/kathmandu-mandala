import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[400px] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/HeroImage.png"
        alt="Hero"
        fill
        priority
        className="object-center object-cover"
      />
      {/* Overlay init*/}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content */}
      <div className="relative z-20 flex flex-row items-center justify-between h-full w-full px-4 lg:px-12 ">
        {/* First column: Text and buttons */}
        <div className="flex flex-col items-start justify-center max-w-5xl w-full space-y-4 md:space-y-6 md:pl-6 lg:pl-12 max-sm:px-4">
          <h1 className="text-[#F7ECD8] font-garamond text-xl max-sm:text-2xl md:text-3xl lg:text-5xl text-left drop-shadow-lg leading-tight">
            Willkommen bei Kathmandu Mandala <br />
            Ihr Partner für Nepal-Reisen und Visumservice
          </h1>
          <p className="text-[#F7ECD8] font-links text-sm sm:text-base text-left drop-shadow">
            Schneller, einfacher und sicherer Visumantrag für deutsche Touristen
          </p>
          <div className="flex flex-row items-center space-x-2 sm:space-x-4 mt-2">
            <a
              href="#"
              className="bg-[#D6A346] hover:bg-[#D6A346] text-zinc-900 font-links font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow transition text-sm max-sm:text-sm"
            >
              Visumantrag herunterladen
            </a>
            <a
              href="#"
              className="text-white font-links font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 hover:underline transition text-sm max-sm:text-sm"
            >
              Reiseangebote entdecken
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default Hero;
