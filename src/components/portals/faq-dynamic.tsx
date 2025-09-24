"use client";

import { useEffect, useState } from "react";
import { faqService } from "@/api/services/faqService";
import FAQPortal from "./faq-portal";
import { useTranslation } from "@/app/hooks/use-translation";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  type: string;
}

interface FaqDynamicProps {
  type?: string;
  limit?: number;
}

function FaqDynamic({ type, limit = 10 }: FaqDynamicProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const params: {
          size: number;
          type?: string;
        } = {
          size: limit,
        };

        if (type) {
          params.type = type;
        }

        const response = await faqService.getFaqs(params);

        if (response.status === 200 && response.data) {
          setFaqs(response.data);
        } else {
          setError("Failed to fetch FAQs");
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Failed to load FAQs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [type, limit]);

  // Format FAQs for the FAQ Portal component and handle HTML content
  const formattedFaqs = faqs.map((faq) => ({
    key: `faq-${faq.id || Math.random().toString(36).substr(2, 9)}`,
    question: faq.question,
    answer: faq.answer,
    isHtml: true, // Flag to indicate HTML content
  }));

  if (loading) {
    return (
      <div className="bg-[#FCF8F2] py-6 w-full rounded-xl  animate-pulse">
        <div className="h-8 bg-[#F7ECD9] rounded mb-6 w-1/3"></div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-4">
            <div className="h-6 bg-[#F7ECD9] rounded mb-2"></div>
            <div className="h-16 bg-[#F7ECD9] rounded opacity-50"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error || faqs.length === 0) {
    return (
      <div className="bg-transparent py-6 w-full rounded-xl ">
        <h2 className="font-garamond font-semibold text-2xl md:text-3xl mb-6 text-[#23233B]">
          {t("faq_heading") || "Frequently Asked Questions"}
        </h2>
        <p className="text-[#23233B] font-links">
          {error || t("no_faqs_available") || "No FAQs available at this time."}
        </p>
      </div>
    );
  }

  const sectionTitle = type
    ? `${type.charAt(0).toUpperCase() + type.slice(1)} FAQs`
    : "Frequently Asked Questions";

  return <FAQPortal items={formattedFaqs} sectionTitle={sectionTitle} />;
}

export default FaqDynamic;
