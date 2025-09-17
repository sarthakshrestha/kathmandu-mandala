import React from "react";

export default function RestaurantMain() {
  return (
    <section className="bg-[#f8f3ea] px-4 md:px-12 py-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center w-full">
        {/* Image */}
        <div className="flex-1 w-full">
          <img
            src="/images/restaurant/1.png"
            alt="Kathmandu Mandala Restaurant"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 w-full flex flex-col justify-center">
          <h1 className=" text-4xl md:text-5xl font-semibold mb-6 text-[#1a1a1a] font-garamond">
            Kathmandu Mandala
          </h1>
          <p className="text-lg md:text-xl text-[#333] mb-6 leading-relaxed">
            Kathmandu Mandala is more than just a restaurant it’s a cultural
            experience that brings the heart of Nepal to Germany. Inspired by
            the vibrant streets of Kathmandu and the warmth of Nepali
            hospitality, we offer a place where food, culture, and tradition
            come together. Step inside and you’ll find a welcoming space
            decorated with authentic Nepali art, handicrafts, and symbols that
            reflect the richness of our heritage.
          </p>
          <p className="text-lg md:text-xl text-[#333] mb-6 leading-relaxed">
            From traditional mandalas to handmade décor, every detail is
            designed to showcase the beauty of Nepal. Our menu celebrates the
            flavors of Nepali cuisine, crafted with care to give you a true
            taste of home. From comforting momos (Nepali dumplings) to aromatic
            curries, thalis, and street-style favorites, each dish is prepared
            with authentic spices and recipes passed down through generations.
          </p>
          <a
            href="tel:+977123456798"
            className="text-base italic underline text-[#222] mt-2 w-fit"
          >
            +977 123456798
          </a>
        </div>
      </div>
    </section>
  );
}
