"use client";
import { useTranslation } from "@/app/hooks/use-translation";
import TrekDetailComponent from "./trek-detail";
import TrekDetailSidebar from "./trek-detail-sidebar";
import TabsPortal from "@/components/tabs-portal";
import type { TabItem } from "@/components/tabs-portal";
export default function TrekTabs() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  const tabs: TabItem[] = [
    {
      value: "detail",
      label: t("trek_tab_detail") || "Trip detail",
      content: (
        <div className="w-full flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] gap-8 items-start">
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
          <TrekDetailSidebar duration="14 Days" price="1,800 EUR" />
        </div>
      ),
    },
    {
      value: "overview",
      label: t("trek_tab_overview") || "Overview",
      content: <div>Overview content here</div>,
    },
    {
      value: "plan",
      label: t("trek_tab_plan") || "Tour Plan",
      content: <div>Tour Plan content here</div>,
    },
    {
      value: "include",
      label: t("trek_tab_include") || "Included/Exclude",
      content: <div>Included/Exclude content here</div>,
    },
    {
      value: "more",
      label: t("trek_tab_more") || "More Tours",
      content: <div>More Tours content here</div>,
    },
    {
      value: "faq",
      label: t("trek_tab_faq") || "FAQ",
      content: <div>FAQ content here</div>,
    },
  ];

  return <TabsPortal tabs={tabs} defaultValue="detail" />;
}
