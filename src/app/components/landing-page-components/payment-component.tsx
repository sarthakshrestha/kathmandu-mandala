"use client";
import { FaCcVisa, FaPaypal } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { useTranslation } from "@/app/hooks/use-translation";

export default function PaymentComponent() {
  const { t, isLoaded } = useTranslation();
  if (!isLoaded) return null;

  return (
    <section className="bg-[#FCF8F2] py-16 px-4 max-sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-garamond text-4xl mb-4 text-[#3C1E1E]">
          {t("payment_options_title") || "Available Payment Options"}
        </h2>
        <p className="text-[#23233B]/70 mb-10 text-lg">
          {t("payment_options_subtitle") ||
            "We support multiple secure payment methods to make the process simple and convenient for you."}
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Visa Card */}
          <div className="bg-white rounded-2xl shadow-sm flex-1 px-8 py-10 flex flex-col items-center">
            <FaCcVisa className="text-[#1A1F71] mb-4" size={56} />
            <h3 className="font-garamond text-2xl mb-2 text-[#3C1E1E]">
              {t("payment_visa_title") || "Visa Card"}
            </h3>
            <p className="text-[#23233B]/70 text-base">
              {t("payment_visa_desc") ||
                "Pay quickly and securely using your Visa credit or debit card."}
            </p>
          </div>
          {/* Bank Transfer */}
          <div className="bg-white rounded-2xl shadow-sm flex-1 px-8 py-10 flex flex-col items-center">
            <BsBank className="text-[#E2B23A] mb-4" size={56} />
            <h3 className="font-garamond text-2xl mb-2 text-[#3C1E1E]">
              {t("payment_bank_title") || "Bank Transfer"}
            </h3>
            <p className="text-[#23233B]/70 text-base">
              {t("payment_bank_desc") ||
                "Transfer the payment directly to our bank account."}
            </p>
          </div>
          {/* PayPal */}
          <div className="bg-white rounded-2xl shadow-sm flex-1 px-8 py-10 flex flex-col items-center">
            <FaPaypal className="text-[#003087] mb-4" size={56} />
            <h3 className="font-garamond text-2xl mb-2 text-[#3C1E1E]">
              {t("payment_paypal_title") || "PayPal"}
            </h3>
            <p className="text-[#23233B]/70 text-base">
              {t("payment_paypal_desc") ||
                "Use your PayPal account for a fast and safe checkout experience."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
