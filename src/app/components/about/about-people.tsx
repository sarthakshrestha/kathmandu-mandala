"use client";
import { useTranslation } from "@/app/hooks/use-translation";

const team = [
  {
    name: "Demi Wilkinson",
    role: "CEO",
    location: "Germany",
    description: "Oversees the sales and visa procedures from Germany.",
    img: "https://placehold.co/240x240?text=Photo",
  },
  {
    name: "Demi Wilkinson",
    role: "Manager from Nepal",
    location: "Nepal",
    description:
      "Examine the product export details and review the visa process for Nepal.",
    img: "https://placehold.co/240x240?text=Photo",
  },
  {
    name: "Rajesh Gupta",
    role: "Operations Manager",
    location: "South Asia",
    description:
      "Coordinates logistics and supply chain operations across South Asia.",
    img: "https://placehold.co/240x240?text=Photo",
  },
  {
    name: "Keisha Jones",
    role: "Finance Analyst",
    location: "North America",
    description:
      "Manages budgeting and financial reporting for North American operations.",
    img: "https://placehold.co/240x240?text=Photo",
  },
  {
    name: "Li Wei",
    role: "Product Designer",
    location: "Asia",
    description:
      "Leads the design team to create user-centered products for the Asian market.",
    img: "https://placehold.co/240x240?text=Photo",
  },
  {
    name: "Demi Wilkinson",
    role: "CEO",
    location: "Germany",
    description: "Oversees the sales and visa procedures from Germany.",
    img: "https://placehold.co/240x240?text=Photo",
  },
];

export default function AboutPeople() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  return (
    <section className="bg-[#FFF9EE] py-12 px-2 max-sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-[#9A2731] font-links text-base font-semibold mb-2 text-center">
          {t("about_people_subtitle") || "We're hiring!"}
        </div>
        <h2 className="font-garamond text-2xl max-sm:text-4xl mb-2 text-center text-[#23233B]">
          {t("about_people_title") || "Meet our team"}
        </h2>
        <p className="font-links text-[#23233B]/70 text-base max-sm:text-lg mb-8 text-center max-w-2xl mx-auto">
          {t("about_people_desc") ||
            "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((person, idx) => (
            <div
              key={idx}
              className="bg-[#F7ECD8] rounded-xl shadow-sm p-0 flex flex-col items-center border border-[#ece2d0]"
            >
              <img
                src={person.img}
                alt={person.name}
                className="rounded-lg w-full h-48 object-cover mb-0"
                style={{ maxHeight: "212px" }}
              />
              <div className="w-full px-6 py-4 text-left">
                <div className="font-garamond text-xl text-[#23233B] font-semibold mb-1">
                  {person.name}
                </div>
                <div className="font-links text-[#9A2731] text-base font-semibold mb-2 uppercase tracking-wide">
                  {person.role}
                </div>
                <div className="font-links text-[#23233B] text-base leading-relaxed">
                  {person.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
