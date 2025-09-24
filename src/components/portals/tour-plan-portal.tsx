"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface TourPlanItem {
  key: string;
  title: string;
  description: string;
}

interface TourPlanPortalProps {
  items: TourPlanItem[];
  sectionTitle?: string;
}

export default function TourPlanPortal({
  items,
  sectionTitle = "Tour Plan",
}: TourPlanPortalProps) {
  return (
    <section className="w-full bg-transparent rounded-xl p-0 md:p-0 ">
      <h2 className="font-links font-semibold text-lg md:text-3xl mb-4 font-garamond">
        {sectionTitle}
      </h2>
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {items.map((item) => (
          <AccordionItem
            key={item.key}
            value={item.key}
            className="bg-[#761E25] rounded-lg px-4 data-[state=open]:bg-white text-white"
          >
            <AccordionTrigger className="font-links text-base md:text-lg font-semibold px-0 py-4 data-[state=open]:text-[#23233B] data-[state=open]:font-semibold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="bg-white rounded-b-xl border-none border-[#E5E5E5] text-base text-[#23233B] pb-4 px-0">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
