"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
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
    <div className={`w-full  ${className}`}>
      <Tabs defaultValue={defaultValue || tabs[0]?.value} className="w-full">
        <TabsList
          className={`bg-transparent rounded-none border-b p-0 w-full flex-wrap justify-start px-2 md:px-8 ${tabListClassName}`}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
        bg-transparent rounded-none border-0 border-b-2 border-transparent
        data-[state=active]:border-[#761E25] data-[state=active]:shadow-none
        font-links text-base md:text-lg px-2 py-1
        transition-none data-[state=active]:bg-transparent
      "
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
