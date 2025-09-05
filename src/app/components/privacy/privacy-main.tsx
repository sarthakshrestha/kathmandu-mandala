"use client";
import { useTranslation } from "@/app/hooks/use-translation";

const formatContent = (content: string) =>
  content.split("\n").map((line, idx) =>
    line.trim() === "" ? (
      <br key={idx} />
    ) : (
      <p key={idx} className="mb-2">
        {line}
      </p>
    )
  );

export default function PrivacyContent() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  return (
    <div className="w-full mx-auto px-4 py-8 bg-[#FAF6F0] rounded-xl shadow-sm">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-garamond text-2xl sm:text-3xl mb-6 text-[#23233B]">
          {t("privacy_title")}
        </h1>
        <div className="font-links text-[#23233B] text-base sm:text-lg leading-relaxed">
          {formatContent(t("privacy_content"))}
        </div>
      </div>
    </div>
  );
}
