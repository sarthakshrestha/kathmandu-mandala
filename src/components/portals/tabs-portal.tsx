"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  sectionId?: string; // <-- Add this
}

interface TabsPortalProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
  tabListClassName?: string;
}

export default function TabsPortal({
  tabs,
  defaultValue,
  className = "",
  tabListClassName = "",
}: TabsPortalProps) {
  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue={defaultValue || tabs[0]?.value} className="w-full">
        <TabsList
          className={`bg-transparent rounded-none border-b p-0 w-full overflow-x-auto flex-nowrap flex justify-start px-2 sm:px-4 md:px-8 max-sm:gap-5 ${tabListClassName}`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                font-links text-base md:text-lg px-2 py-1 min-w-max
                bg-transparent rounded-none border-0 border-b-2 border-transparent
                data-[state=active]:border-[#761E25] data-[state=active]:shadow-none
                data-[state=active]:bg-transparent
                transition-none
              "
              onClick={() => {
                if (tab.sectionId) {
                  const el = document.getElementById(tab.sectionId);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
