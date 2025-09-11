"use client";
import { useTranslation } from "@/app/hooks/use-translation";
import TabsPortal from "@/components/tabs-portal";
import type { TabItem } from "@/components/tabs-portal";
export default function TrekTabs() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  const tabs: TabItem[] = [
    {
      value: "detail",
      label: t("trek_tab_detail") || "Trip detail",
      content: <div>Trip detail content here</div>,
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
