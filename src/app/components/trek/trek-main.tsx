import React from "react";
import TrekTabs from "./trek-tabs";
import GalleryPortal from "@/components/portals/gallery-portal";
import TrekDetailComponent from "./trek-detail";
import TrekDetailSidebar from "./trek-detail-sidebar";
import TrekHimalayaAccordion from "./trek-accordion";
import TourPlanPortal from "@/components/portals/tour-plan-portal";
import IncludeExcludePortal from "@/components/portals/include-exclude-portal";
import MoreToursPortal from "@/components/portals/more-tours-portal";
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

function TrekMain() {
  return (
    <div className="bg-[#FFF9EE] w-full">
      <div className="bg-[#FFF9EE] mx-auto max-w-[85rem]">
        <div className="mx-auto flex flex-col items-center justify-between relative h-1/2">
          <GalleryPortal
            images={[
              "/images/trek/Trek1.png",
              "/images/trek/Trek2.png",
              "/images/trek/Trek3.png",
              "/images/trek/Trek3.png",
              "/images/trek/Trek2.png",
            ]}
          />
        </div>
        <div className="max-w-[85rem] items-start flex flex-col justify-start">
          <TrekTabs />
        </div>
        <div className="w-full flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] gap-8 items-start max-sm:px-2">
          <TrekDetailComponent
            title="Trekking in the Himalayas (14 Days)"
            description="The Manaslu Circuit Trek is one of those undiscovered trekking journeys that, despite not being so popular, has quite a bit of potential. It would not be an exaggeration to say that it’s a hidden gem."
            tourType="Group"
            maxGroupSize={50}
            ageRequirement="15 - 99 yrs"
            operatedIn="German/ English"
            overview={[
              "The Everest Base Camp trek combines the convenience of well-maintained paths with the raw beauty of the Himalayas. The Everest region, located in the lap of the mighty Himalayas, is recognized for its beautiful scenery and welcoming Sherpa people. This adventure not only brings you to the base of the world’s highest peak but also immerses you in the rich culture and traditions of Nepal.",
              "The Everest Base Camp trek combines the convenience of well-maintained paths with the raw beauty of the Himalayas. The Everest region, located in the lap of the mighty Himalayas, is recognized for its beautiful scenery and welcoming Sherpa people. This adventure not only brings you to the base of the world’s highest peak but also immerses you in the rich culture and traditions of Nepal.",
              "The Everest Base Camp trek combines the convenience of well-maintained paths with the raw beauty of the Himalayas. The Everest region, located in the lap of the mighty Himalayas, is recognized for its beautiful scenery and welcoming Sherpa people. This adventure not only brings you to the base of the world’s highest peak but also immerses you in the rich culture and traditions of Nepal.",
            ]}
          />
          <div className="max-sm:px-4 flex flex-row w-full">
            <TrekDetailSidebar duration="14 Days" price="1,800 EUR" />
          </div>
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
                    description:
                      "Hike on the most beautiful trails of the Himalayas",
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
        </div>
      </div>
    </div>
  );
}

export default TrekMain;
