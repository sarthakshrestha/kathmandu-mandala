"use client";
import { useTranslation } from "@/app/hooks/use-translation";

interface TrekDetailSidebarProps {
  duration: string;
  price: string;
  onInquiry?: () => void;
}

export default function TrekDetailSidebar({
  duration,
  price,
  onInquiry,
}: TrekDetailSidebarProps) {
  const { t } = useTranslation();

  return (
    <aside className="bg-[#FFF9EE] max-sm:p-4 max-sm:w-full max-sm:px-4 border border-[#E5E5E5] rounded-xl p-6 flex flex-col gap-6 items-center w-full md:max-w-lg mx-auto md:mx-0 md:mt-5">
      <div className="flex w-full justify-between items-start mb-2">
        <div>
          <span className="block text-base text-muted-foreground mb-1">
            {t("trek_detail_duration") || "Duration"}
          </span>
          <span className="font-links font-semibold text-xl">{duration}</span>
        </div>
        <div className="text-right">
          <span className="block text-base text-muted-foreground mb-1">
            {t("trek_detail_from") || "From"}
          </span>
          <span className="font-links font-semibold text-xl text-[#761E25]">
            {price}
          </span>
        </div>
      </div>
      <button
        className="w-full rounded-xl bg-[#E3B7B7] text-[#761E25] py-4 font-links font-medium text-lg transition hover:bg-[#d6a3a3]"
        onClick={onInquiry}
      >
        {t("trek_detail_send_inquiry") || "Send Inquiry"}
      </button>
    </aside>
  );
}
