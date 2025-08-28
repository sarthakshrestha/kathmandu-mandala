"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import { useTranslation } from "@/app/hooks/use-translation";

export default function DownloadFormDialog() {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#B94B4B] hover:bg-[#a13e3e] text-white font-links font-semibold py-2 sm:py-3 rounded-lg transition text-sm sm:text-base w-full">
          {t("download_form_button") || "Download Form"}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#FAF6F0] p-0 sm:p-0 rounded-xl border-none max-w-md">
        <DialogHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#23233B]" />
            <DialogTitle className="font-garamond text-2xl text-[#23233B]">
              {t("visa_application_title") || "Visa Application"}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="px-6 pb-4">
          <DialogDescription asChild>
            <div className="text-[#23233B] text-base mb-4">
              <p className="mb-2">
                {t("visa_application_intro") || "To apply for your Nepal Visa:"}
              </p>
              <ol className="list-decimal list-inside space-y-1 font-links">
                <li>
                  <span className="font-semibold">
                    {t("visa_application_step1") || "Download the Visa Form"}
                  </span>
                </li>
                <li>
                  {t("visa_application_step2") ||
                    "Fill it out on your device or by hand"}
                </li>
                <li>
                  {t("visa_application_step3_prefix") || "Send Via Whatsapp to"}{" "}
                  <span className="font-semibold">
                    {t("visa_application_whatsapp") || "+977 98123456789"}
                  </span>
                </li>
              </ol>
            </div>
          </DialogDescription>
        </div>
        <div className="flex gap-4 px-6 pb-6">
          <a
            href="https://wa.me/97798123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border-2 text-center  rounded-lg py-3 font-links  text-[#23233B] bg-white hover:bg-[#FFF3E6] transition"
          >
            <img
              src="/images/icons/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            {t("open_whatsapp_button") || "Open Whatsapp"}
          </a>
          <a
            href="/visa-form.pdf"
            download
            className="flex-1 flex items-center justify-center gap-2 rounded-lg py-3 font-links font-semibold text-white bg-[#D6A346] hover:bg-[#c9a13e] transition text-center"
          >
            {t("download_form_button") || "Download Form"}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
