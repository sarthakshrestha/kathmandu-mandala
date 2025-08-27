"use client";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";

const products = [
  {
    img: "https://placehold.co/600x400",
    title: "Nepali Farmer Shilajit Resin - 30g",
    price: "Rs 7,000",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Himalayan Herbal Tea - 100g",
    price: "Rs 350",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Organic Turmeric Powder - 200g",
    price: "Rs 450",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Traditional Khukuri Knife - Handmade",
    price: "Rs 5,500",
    action: "Enquiry",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Tibetan Singing Bowl - Medium Size",
    price: "Rs 2,200",
    action: "Enquiry",
  },
];

export default function Component6() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  return (
    <section className="relative bg-[#4B2323] py-20 px-2 sm:px-6 lg:px-12 overflow-hidden max-sm:px-4">
      {/* Decorative Mandala Patterns */}
      <Image
        src="/images/background/BackgroundPattern.png"
        alt="Background Pattern"
        fill
        className="object-cover object-center pointer-events-none select-none "
        style={{ zIndex: 0 }}
        priority
      />
      <div className="relative z-10 md:max-w-[85rem] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-garamond text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight">
              Authentic Nepali Treasures
            </h2>
            <p className="text-white/80 font-links text-base md:text-lg">
              Discover handcrafted products from Nepal, blending tradition,
              culture, and artistry into everyday life.
            </p>
          </div>
          <a
            href="#"
            className="text-white font-links font-semibold text-base hover:underline self-end md:self-center"
          >
            View all
          </a>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#FFF9EE] rounded-xl overflow-hidden flex flex-col shadow-md"
            >
              <div className="w-full h-[220px] relative">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="font-links text-[#23233B] text-base font-medium mb-2">
                  {product.title}
                </div>
                <div className="flex items-center gap-2 text-[#B94B4B] font-links text-sm font-semibold">
                  {product.price}
                  <span className="mx-2 text-[#B94B4B]">|</span>
                  <span>{product.action}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
