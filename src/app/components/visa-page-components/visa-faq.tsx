"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "@/app/hooks/use-translation";
import { usePathname } from "next/navigation";

export default function VisaFAQ() {
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

  return (
    <section className="py-6 md:w-2/3 mt-2">
      {pathname === "/faq" && (
        <div className="flex flex-col items-center mb-4 py-12 max-sm:py-2">
          <span className="text-[#7B2D2D] text-sm font-links mb-2">
            {t("faq_label")}
          </span>
          <h1 className="font-garamond text-3xl sm:text-5xl font-medium text-[#23233B] mb-2">
            {t("faq_heading")}
          </h1>
          <span className="text-[#6B6B7B] text-base">
            {t("faq_subheading")}
          </span>
        </div>
      )}
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
    </section>
  );
}
