"use client";
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
import { useTranslation } from "@/app/hooks/use-translation";

function TrekMain() {
  const { t } = useTranslation();
  const tourPlanItems = [
    {
      key: "day1",
      title: t("tour_plan_day1_title"),
      description: t("tour_plan_day1_desc"),
    },
    {
      key: "day2-3",
      title: t("tour_plan_day2_3_title"),
      description: t("tour_plan_day2_3_desc"),
    },
    {
      key: "day4-6",
      title: t("tour_plan_day4_6_title"),
      description: t("tour_plan_day4_6_desc"),
    },
    {
      key: "day7",
      title: t("tour_plan_day7_title"),
      description: t("tour_plan_day7_desc"),
    },
    {
      key: "day8-9",
      title: t("tour_plan_day8_9_title"),
      description: t("tour_plan_day8_9_desc"),
    },
  ];

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
        <div className="w-full flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-8 items-start max-sm:px-2 ">
          <div className="max-sm:px-4 flex flex-row w-full md:hidden max-sm:mt-4">
            <TrekDetailSidebar duration="14 Days" price="1,800 EUR" />
          </div>
          <TrekDetailComponent
            title={t("trek_detail_title")}
            description={t("trek_detail_description")}
            tourType={t("trek_detail_tour_type")}
            maxGroupSize={50}
            ageRequirement={t("trek_detail_age_requirement")}
            operatedIn={t("trek_detail_operated_in")}
            overview={[t("trek_detail_overview_1")]}
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
                  t("include_pick_drop"),
                  t("include_meal"),
                  t("include_cruise_dinner"),
                  t("include_visit_places"),
                  t("include_guided_tours"),
                ]}
                exclude={[
                  t("exclude_additional_services"),
                  t("exclude_insurance"),
                  t("exclude_food_drinks"),
                  t("exclude_tickets"),
                ]}
              />
            </section>
            <section id="more-tours">
              <MoreToursPortal
                tours={[
                  {
                    image: "/images/trek/Trek2.png",
                    title: t("more_tours_trek_title"),
                    description: t("more_tours_trek_desc"),
                    price: t("more_tours_trek_price"),
                  },
                  {
                    image: "/images/trek/Trek3.png",
                    title: t("more_tours_city_title"),
                    description: t("more_tours_city_desc"),
                    price: t("more_tours_city_price"),
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
