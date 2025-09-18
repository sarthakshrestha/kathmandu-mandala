"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";

function TravelMain() {
  const { t, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  const cards = [
    {
      img: "/images/places/Place1.png",
      title: t("card1_title"),
      days: t("card1_days"),
      desc: t("card1_desc"),
      price: t("card1_price"),
      alt: t("card1_title"),
      daysClass: "font-semibold",
    },
    {
      img: "/images/places/Place2.png",
      title: t("card2_title"),
      days: t("card2_days"),
      desc: t("card2_desc"),
      price: t("card2_price"),
      alt: t("card2_title"),
      daysClass: "font-semibold",
    },
    {
      img: "/images/places/Place3.png",
      title: t("card3_title"),
      days: t("card3_days"),
      desc: t("card3_desc"),
      price: t("card3_price"),
      alt: t("card3_title"),
      daysClass: "font-semibold",
    },
  ];

  return (
    <section className="relative py-10 max-sm:py-12 max-sm:px-4 px-2 sm:px-6 pb-24 lg:px-18 overflow-hidden bg-[#FFF9EE]">
      <div className="relative z-10 max-w-7xl px-18 max-sm:px-8 mx-auto">
        <div className="text-center mb-2">
          <span className="inline-block text-[#B94B4B]  px-4 py-1 rounded-full font-garamond text-lg font-semibold">
            Travel list
          </span>
        </div>
        <h2 className="text-center font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4B2323] mb-10">
          {t("travel_offers_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7ECD8] rounded-xl shadow p-6 flex flex-col shadow-sm"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <h3 className="font-garamond text-2xl sm:text-2xl text-[#4B2323] mb-2 font-semibold">
                {card.title}
                <br />
                <span className={card.daysClass}>{card.days}</span>
              </h3>
              <p className="text-[#4B2323] font-links text-sm mb-4">
                {card.desc}
              </p>
              <span className="text-[#B94B4B] font-garamond text-2xl font-semibold mt-auto">
                {card.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelMain;
