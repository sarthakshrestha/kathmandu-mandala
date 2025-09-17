import React from "react";

function MenuMain() {
  return (
    <section className="bg-[#f8f3ea] min-h-screen flex flex-col items-center py-5 px-4 max-sm:px-8">
      <h2 className="text-2xl md:text-4xl font-garamond font-semibold mb-10 text-[#1a1a1a]">
        Menu
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full max-w-5xl">
        <img
          src="/images/menu/menu1.png"
          alt="Menu Drinks"
          className="rounded-lg shadow-lg w-full md:w-[600px] h-auto object-contain"
        />
        <img
          src="/images/menu/menu2.png"
          alt="Menu Food"
          className="rounded-lg shadow-lg w-full md:w-[600px] h-auto object-contain lg:mt-36"
        />
      </div>
    </section>
  );
}

export default MenuMain;
