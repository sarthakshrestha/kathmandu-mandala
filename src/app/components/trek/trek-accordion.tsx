"use client";
import TourPlanPortal from "@/components/tour-plan-portal";
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
  return <TourPlanPortal items={tourPlanItems} sectionTitle="Tour Plan" />;
}
