"use client";
import TourPlanPortal from "@/components/portals/tour-plan-portal";
import IncludeExcludePortal from "@/components/portals/include-exclude-portal";
import MoreToursPortal from "@/components/portals/more-tours-portal";
import FAQPortal from "@/components/portals/faq-portal";
import TrekFAQ from "./trek-faq";

const tourPlanItems = [
  {
    key: "day1",
    title: "Day 1: Arrive at Kathmandu and Transfer to hotel",
    description:
      "You will be welcomed by a Great Nepal Representative at the airport and be transferred to your hotel. Your Great Nepal Representative will explain briefly about the travel itinerary. There will be a welcome dinner tonight where you will enjoy local cuisine and folk dance.",
  },
  {
    key: "day2-3",
    title: "Day 2-3: Manaslu expedition preparation & Cultural tour, Hotel",
    description: "Details for days 2-3...",
  },
  {
    key: "day4-6",
    title: "Day 4-6: Manaslu Base Camp Trek, Lodge",
    description: "Details for days 4-6...",
  },
  {
    key: "day7",
    title: "Day 7: Summit Day, High Camp",
    description: "Details for day 7...",
  },
  {
    key: "day8-9",
    title: "Day 8-9: Descent to Samagaon, Tea House",
    description: "Details for days 8-9...",
  },
];

export default function TrekHimalayaAccordion() {
  return (
    <div className="flex flex-col">
      <section id="tour-plan">
        <TourPlanPortal items={tourPlanItems} sectionTitle="Tour Plan" />
      </section>
      <section id="include-exclude">
        <IncludeExcludePortal
          include={[
            "Pick and Drop Services",
            "1 Meal Per Day",
            "Cruise Dinner & Music Event",
            "Visit 7 Best Places in the City With Group",
            "Guided City Tours with Local Experts",
          ]}
          exclude={[
            "Additional Services",
            "Insurance",
            "Food & Drinks",
            "Tickets",
          ]}
        />
      </section>
      <section id="more-tours">
        <MoreToursPortal
          tours={[
            {
              image: "/images/trek/Trek2.png",
              title: "Trekking in the Himalayas (14 Days)",
              description: "Hike on the most beautiful trails of the Himalayas",
              price: "Price: from 1,800 EUR",
            },
            {
              image: "/images/trek/Trek3.png",
              title: "City trip to Kathmandu (5 Days)",
              description:
                "Discover the historic old town and UNESCO World Heritage sites",
              price: "Price: from 600 EUR",
            },
          ]}
        />
      </section>
      <section id="faq">
        <TrekFAQ />
      </section>
    </div>
  );
}
