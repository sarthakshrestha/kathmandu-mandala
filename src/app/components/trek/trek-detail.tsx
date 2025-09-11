"use client";
import { useTranslation } from "@/app/hooks/use-translation";

interface TrekDetailProps {
  title: string;
  description: string;
  tourType: string;
  maxGroupSize: number;
  ageRequirement: string;
  operatedIn: string;
  overview: string[];
}

export default function TrekDetailComponent({
  title,
  description,
  tourType,
  maxGroupSize,
  ageRequirement,
  operatedIn,
  overview,
}: TrekDetailProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-transparent rounded-xl p-4 md:p-8 max-sm:mt-0">
      <h2 className="font-links font-semibold text-lg md:text-xl mb-2">
        {title}
      </h2>
      <p className="text-base text-[#23233B] mb-6">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <span className="block text-sm text-muted-foreground mb-1">
            {t("trek_detail_tour_type") || "Tour Type"}
          </span>
          <span className="font-links font-semibold text-base">{tourType}</span>
        </div>
        <div>
          <span className="block text-sm text-muted-foreground mb-1">
            {t("trek_detail_max_group_size") || "Max Group Size"}
          </span>
          <span className="font-links font-semibold text-base">
            {maxGroupSize}
          </span>
        </div>
        <div>
          <span className="block text-sm text-muted-foreground mb-1">
            {t("trek_detail_age_requirement") || "Age Requirement"}
          </span>
          <span className="font-links font-semibold text-base">
            {ageRequirement}
          </span>
        </div>
        <div>
          <span className="block text-sm text-muted-foreground mb-1">
            {t("trek_detail_operated_in") || "Operated In"}
          </span>
          <span className="font-links font-semibold text-base">
            {operatedIn}
          </span>
        </div>
      </div>
      <h3 className="font-links font-semibold text-lg md:text-xl mb-2">
        {t("trek_detail_overview_title") ||
          "Trekking in the Himalayas Overview"}
      </h3>
      <div className="space-y-4">
        {overview.map((text, idx) => (
          <p key={idx} className="text-base text-[#23233B]">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
