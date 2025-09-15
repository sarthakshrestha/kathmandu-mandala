"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "@/app/hooks/use-translation";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function VisaFAQ() {
  const [activeTab, setActiveTab] = useState("general");
  const { t, isLoaded } = useTranslation();
  const pathname = usePathname();
  if (!isLoaded) return null;

  const faqKeys = [
    "faq_q1",
    "faq_q2",
    "faq_q3",
    "faq_q4",
    "faq_q5",
    "faq_q6",
    "faq_q7",
    "faq_q8",
    "faq_q9",
    "faq_q10",
  ];
  const faqAnswers = [
    "faq_a1",
    "faq_a2",
    "faq_a3",
    "faq_a4",
    "faq_a5",
    "faq_a6",
    "faq_a7",
    "faq_a8",
    "faq_a9",
    "faq_a10",
  ];

  const tabItems = [
    { value: "general", label: t("faq_tab_general") },
    { value: "visa", label: t("faq_tab_visa") },
    { value: "tour", label: t("faq_tab_tour") },
    { value: "restaurant", label: t("faq_tab_restaurant") },
    { value: "shop", label: t("faq_tab_shop") },
    { value: "courier", label: t("faq_tab_courier") },
  ];

  return (
    <section className="py-4 md:w-2/3 mt-2 lg:py-4">
      {pathname === "/faq" ? (
        <div className="grid grid-cols-5 w-full items-start justify-center">
          {/* Tabs column (left) */}
          <div className="col-span-1 flex flex-col items-start min-w-[180px] max-w-[220px] lg:mt-96 max-sm:hidden flex-shrink-0">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full text-left"
            >
              <TabsList className="flex flex-col gap-4 bg-transparent p-0 w-full text-left items-start">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="text-left px-0 py-2 font-links text-lg font-medium data-[state=active]:text-[#B94B4B] text-[#23233B] hover:text-[#B94B4B] transition-colors bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:border-none data-[state=active]:shadow-none"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          {/* FAQ content column (right, centered) */}
          <div className="col-span-3 flex flex-col items-center justify-center w-full mx-auto">
            <div className="flex flex-col items-center mb-4 py-12">
              <span className="text-[#7B2D2D] text-sm font-links mb-2">
                {t("faq_label")}
              </span>
              <h1 className="font-garamond text-3xl sm:text-5xl font-medium text-[#23233B] mb-2 text-center">
                {t("faq_heading")}
              </h1>
              <span className="text-[#6B6B7B] text-base text-center">
                {t("faq_subheading")}
              </span>
            </div>
            <div className="block sm:hidden w-[400px] gap-5 mb-6 overflow-x-auto">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full "
              >
                <TabsList className="flex flex-row gap-4 bg-transparent p-0 min-w-max">
                  {tabItems.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="text-left px-0 py-2 font-links text-lg font-medium data-[state=active]:text-[#B94B4B] text-[#23233B] hover:text-[#B94B4B] transition-colors bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:border-none data-[state=active]:shadow-none"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <h2 className="font-garamond font-semibold text-2xl sm:text-3xl mb-6 text-[#23233B] text-center">
              FAQ
            </h2>
            <Accordion
              type="multiple"
              className="flex flex-col gap-4 w-full max-w-2xl"
            >
              {faqKeys.map((key, idx) => (
                <AccordionItem
                  key={key}
                  value={key}
                  className="bg-[#F7ECD9] rounded-xl px-4"
                >
                  <AccordionTrigger className="text-[#23233B] font-links text-base sm:text-lg font-medium">
                    {t(key)}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#23233B] font-links text-sm sm:text-base">
                    {t(faqAnswers[idx])}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mb-4 py-12 max-sm:py-2">
          <h2 className="font-garamond font-semibold text-2xl sm:text-3xl mb-6 text-[#23233B]">
            FAQ
          </h2>
          <Accordion type="multiple" className="flex flex-col gap-4">
            {faqKeys.map((key, idx) => (
              <AccordionItem
                key={key}
                value={key}
                className="bg-[#F7ECD9] rounded-xl px-4"
              >
                <AccordionTrigger className="text-[#23233B] font-links text-base sm:text-lg font-medium">
                  {t(key)}
                </AccordionTrigger>
                <AccordionContent className="text-[#23233B] font-links text-sm sm:text-base">
                  {t(faqAnswers[idx])}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </section>
  );
}
