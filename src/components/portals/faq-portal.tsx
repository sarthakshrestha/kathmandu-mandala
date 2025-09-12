"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  key: string;
  question: string;
  answer: string;
}

interface FAQPortalProps {
  items: FAQItem[];
  sectionTitle?: string;
}

export default function FAQPortal({
  items,
  sectionTitle = "FAQ",
}: FAQPortalProps) {
  return (
    <section className="bg-[#FCF8F2] py-6 w-full rounded-xl p-4 md:p-8">
      <h2 className="font-garamond font-semibold text-2xl md:text-3xl mb-6 text-[#23233B]">
        {sectionTitle}
      </h2>
      <Accordion type="multiple" className="flex flex-col gap-4">
        {items.map((item) => (
          <AccordionItem
            key={item.key}
            value={item.key}
            className="bg-[#F7ECD9] rounded-xl px-4"
          >
            <AccordionTrigger className="text-[#23233B] font-links text-base md:text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#23233B] font-links text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
