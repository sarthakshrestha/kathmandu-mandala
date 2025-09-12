"use client";
import { useTranslation } from "@/app/hooks/use-translation";
import ScrollTabPortal from "@/components/portals/scroll-tab-portal";

export default function TrekTabs() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  const tabs = [
    {
      value: "overview",
      label: t("trek_tab_detail") || "Trip detail",
      sectionId: "overview",
    },
    {
      value: "plan",
      label: t("trek_tab_plan") || "Tour Plan",
      sectionId: "tour-plan",
    },
    {
      value: "include",
      label: t("trek_tab_include") || "Included/Exclude",
      sectionId: "include-exclude",
    },
    {
      value: "more",
      label: t("trek_tab_more") || "More Tours",
      sectionId: "more-tours",
    },
    { value: "faq", label: t("trek_tab_faq") || "FAQ", sectionId: "faq" },
  ];

  return <ScrollTabPortal tabs={tabs} />;
}
