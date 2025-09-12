import GalleryChildren from "@/components/gallery-portal";
import React from "react";
import TrekTabs from "./trek-tabs";
import GalleryPortal from "@/components/gallery-portal";

function TrekMain() {
  return (
    <div className="bg-[#FFF9EE] w-full">
      <div className="bg-[#FFF9EE] mx-auto max-w-7xl">
        <div className="mx-auto flex flex-col items-center justify-between relative h-1/2">
          <GalleryPortal
            images={[
              "/images/trek/Trek1.png",
              "/images/trek/Trek2.png",
              "/images/trek/Trek3.png",
              "/images/trek/Trek3.png",
              "/images/trek/Trek2.png",
            ]}
          />
        </div>
        <div className="max-w-7xl items-start flex flex-col justify-start">
          <TrekTabs />
        </div>
      </div>
    </div>
  );
}

export default TrekMain;
