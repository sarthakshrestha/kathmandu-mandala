"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabItem {
  value: string;
  label: string;
  sectionId: string;
}

interface ScrollTabPortalProps {
  tabs: TabItem[];
  className?: string;
  tabListClassName?: string;
  onTabClick?: (sectionId: string) => void; // Add this prop
}

export default function ScrollTabPortal({
  tabs,
  className = "",
  tabListClassName = "",
  onTabClick, // Accept the prop here
}: ScrollTabPortalProps) {
  const [active, setActive] = useState(tabs[0]?.value);

  // Listen for scroll and update active tab
  useEffect(() => {
    const handleScroll = () => {
      let found = tabs[0].value;
      // Account for navbar height (h-20 = 80px) + some padding
      const navbarHeight = 80;
      const offsetMargin = 20;
      const totalOffset = navbarHeight + offsetMargin; // 100px total

      for (const tab of tabs) {
        const el = document.getElementById(tab.sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= totalOffset) {
            found = tab.value;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const handleTabClick = (tab: TabItem) => {
    // If onTabClick prop is provided, use it
    if (onTabClick) {
      onTabClick(tab.sectionId);
    }
    // Otherwise, fall back to the built-in scroll behavior
    else {
      const el = document.getElementById(tab.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue={active} value={active} className="w-full">
        <TabsList
          className={`bg-transparent rounded-none border-b p-0 w-full overflow-x-auto flex-nowrap flex justify-start px-2 sm:px-4 md:px-8 max-sm:gap-5 ${tabListClassName}`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => handleTabClick(tab)}
              className="
                font-links text-base md:text-lg px-2 py-1 min-w-max
                bg-transparent rounded-none border-0 border-b-2 border-transparent
                data-[state=active]:border-[#761E25] data-[state=active]:shadow-none
                data-[state=active]:bg-transparent
                transition-none
              "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
