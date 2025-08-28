"use client";
import Image from "next/image";
import { CheckCircle, Clock } from "lucide-react";
import DownloadFormDialog from "./download-form-dialog";

export default function VisaMain() {
  return (
    <section className="bg-[#FFF9EE] min-h-screen py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src="/images/VisaPlaceholder.jpg"
            alt="Visa Application"
            width={800}
            height={400}
            className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover"
            priority
          />
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Left: Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-garamond text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-[#23233B]">
              Visa Pre-Registration Form
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  Entries
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  Single
                </span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  Maximum Stay
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  90 days
                </span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  Validity
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  15 days
                </span>
              </div>
              <div>
                <span className="block text-xs sm:text-sm text-[#A89C8E]">
                  Travel Purpose
                </span>
                <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                  Tourism, Business
                </span>
              </div>
            </div>
            <p className="text-[#23233B] text-sm sm:text-base mb-4 sm:mb-6">
              Heading to Nepal? Save time at the border by filling out the Nepal
              Visa on Arrival Pre-Registration Form. Our streamlined process
              allows you to complete the application from the comfort of your
              own home. Once complete, pick up your visa at the border by
              presenting your completed form and paying the government fee.
            </p>
            <div>
              <h2 className="font-garamond text-base sm:text-lg mb-2 sm:mb-3 text-[#23233B]">
                What you need
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#B94B4B]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-[#23233B] text-sm sm:text-base">
                    Passport
                  </span>
                </li>
                <li className="flex items-center gap-2 text-[#B94B4B]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-[#23233B] text-sm sm:text-base">
                    Accommodation details (hotel address)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right: Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full md:w-[320px] flex flex-col gap-3 sm:gap-4 h-fit mt-4 md:mt-0">
            {/* <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <Clock className="w-5 h-5 text-[#B94B4B]" />
              <span className="font-links text-[#23233B] font-semibold text-base">
                August 29
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#A89C8E] mb-1 sm:mb-2">
              Earliest Approval
            </span>
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <span className="text-[#23233B] font-links font-medium text-sm sm:text-base">
                Price
              </span>
              <span className="font-semibold text-[#23233B] text-sm sm:text-base">
                USD $5.00 x 1
              </span>
            </div> */}
            <DownloadFormDialog />
          </div>
        </div>
      </div>
    </section>
  );
}
