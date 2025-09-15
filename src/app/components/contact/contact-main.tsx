"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { Calendar } from "@/components/ui/calendar";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import { contactService } from "@/api/services/contactService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, scheduleSchema } from "@/app/schema/Schemas";
import { toast } from "sonner";

export default function ContactMain() {
  const { t, isLoaded } = useTranslation();
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const [mode, setMode] = useState<"contact" | "schedule">("contact");

  useEffect(() => {
    if (searchParams?.get("schedule") === "1") {
      setMode("schedule");
    }
  }, [searchParams]);

  // Setup react-hook-form with Zod schema
  const formMethods = useForm({
    resolver: zodResolver(mode === "contact" ? contactSchema : scheduleSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
      date: undefined,
      time: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    watch,
  } = formMethods;

  const onSubmit = async (data: any) => {
    if (mode === "contact") {
      try {
        await contactService.sendContact({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone_number: data.phone,
          message: data.message,
        });
        toast.success(t("contact_success_message"));
        reset();
      } catch (error) {
        alert(t("contact_error_api") || "Failed to send message.");
      }
    } else {
      alert(t("schedule_success_message"));
      reset();
    }
  };

  if (!isLoaded) return null;

  return (
    <section className="bg-[#FAF6F0] py-12 px-2 max-sm:px-8">
      <div className="mx-auto flex flex-col md:flex-row lg:gap-10  items-center max-w-7xl">
        {/* Mode Switch Buttons */}
        <div className="flex flex-row gap-4 mb-8 w-full max-w-xs md:flex-row lg:flex-col lg:w-16 lg:items-end lg:justify-end">
          <button
            type="button"
            className={`flex items-center justify-center py-4 px-4 rounded-lg transition border ${
              mode === "contact"
                ? "bg-[#9A2731] text-white border-[#9A2731] shadow"
                : "bg-white text-[#23233B] border-[#e5e5e5]"
            }`}
            onClick={() => setMode("contact")}
            aria-label={t("contact_tab_contact")}
          >
            <MailIcon className="size-7" />
          </button>
          <button
            type="button"
            className={`flex items-center justify-center py-4 px-4 rounded-lg transition border ${
              mode === "schedule"
                ? "bg-[#9A2731] text-white border-[#9A2731] shadow"
                : "bg-white text-[#23233B] border-[#e5e5e5]"
            }`}
            onClick={() => setMode("schedule")}
            aria-label={t("contact_tab_schedule")}
          >
            <PhoneCallIcon className="size-7" />
          </button>
        </div>
        {/* Form */}
        <form
          className="flex-1 max-w-lg w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 className="font-garamond text-3xl mb-2 text-[#23233B]">
            {mode === "contact" ? t("contact_title") : t("schedule_title")}
          </h2>
          <p className="font-links text-[#23233B]/70 text-base mb-8">
            {mode === "contact"
              ? t("contact_subtitle")
              : t("schedule_subtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-links mb-1">
                {t("contact_first_name")}
              </label>
              <input
                {...register("firstName")}
                type="text"
                className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                  errors.firstName ? "border-[#9A2731]" : ""
                }`}
                placeholder={t("contact_first_name_placeholder")}
              />
              {errors.firstName && (
                <span className="text-[#9A2731] text-xs">
                  {errors.firstName.message as string}
                </span>
              )}
            </div>
            <div>
              <label className="block font-links mb-1">
                {t("contact_last_name")}
              </label>
              <input
                {...register("lastName")}
                type="text"
                className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                  errors.lastName ? "border-[#9A2731]" : ""
                }`}
                placeholder={t("contact_last_name_placeholder")}
              />
              {errors.lastName && (
                <span className="text-[#9A2731] text-xs">
                  {errors.lastName.message as string}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-links mb-1">
              {t("contact_email")}
            </label>
            <input
              {...register("email")}
              type="email"
              className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                errors.email ? "border-[#9A2731]" : ""
              }`}
              placeholder={t("contact_email_placeholder")}
            />
            {errors.email && (
              <span className="text-[#9A2731] text-xs">
                {errors.email.message as string}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-links mb-1">
              {t("contact_phone")}
            </label>
            <input
              {...register("phone")}
              type="tel"
              className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                errors.phone ? "border-[#9A2731]" : ""
              }`}
              placeholder={t("contact_phone_placeholder")}
            />
            {errors.phone && (
              <span className="text-[#9A2731] text-xs">
                {errors.phone.message as string}
              </span>
            )}
          </div>
          {mode === "contact" ? (
            <div className="mb-4">
              <label className="block font-links mb-1">
                {t("contact_message")}
              </label>
              <textarea
                {...register("message")}
                className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links min-h-[80px] ${
                  "message" in errors && errors.message
                    ? "border-[#9A2731]"
                    : ""
                }`}
                placeholder={t("contact_message_placeholder")}
              />
              {"message" in errors && errors.message && (
                <span className="text-[#9A2731] text-xs">
                  {errors.message?.message as string}
                </span>
              )}
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block font-links mb-1">
                  {t("schedule_date")}
                </label>
                <Calendar
                  selected={watch("date") as Date | undefined}
                  onSelect={(date) => setValue("date", date)}
                  mode="single"
                  className={`mb-2 ${
                    "date" in errors && errors.date
                      ? "border-[#9A2731] border rounded-md"
                      : ""
                  }`}
                />
                {"date" in errors && errors.date && (
                  <span className="text-[#9A2731] text-xs">
                    {errors.date?.message as string}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-links mb-1">
                  {t("schedule_time")}
                </label>
                <input
                  {...register("time")}
                  type="time"
                  className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                    "time" in errors && errors.time ? "border-[#9A2731]" : ""
                  }`}
                  placeholder={t("schedule_time_placeholder")}
                />
                {"time" in errors && errors.time && (
                  <span className="text-[#9A2731] text-xs">
                    {errors.time?.message as string}
                  </span>
                )}
              </div>
            </>
          )}
          <div className="flex items-center mb-6">
            <input
              {...register("agree")}
              type="checkbox"
              className="mr-2 accent-[#9A2731]"
            />
            <label className="font-links text-sm">
              {t("contact_agree_prefix")}{" "}
              <a
                href="/privacy"
                className="underline text-[#9A2731] hover:text-[#23233B]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact_privacy_policy")}
              </a>
              .
            </label>
          </div>
          {errors.agree && (
            <span className="text-[#9A2731] text-xs block mb-2">
              {errors.agree.message as string}
            </span>
          )}
          <button
            type="submit"
            className="w-full bg-[#9A2731] hover:bg-[#7a1e28] text-white font-links font-semibold py-3 rounded-md transition text-base"
          >
            {mode === "contact"
              ? t("contact_send_button")
              : t("schedule_send_button")}
          </button>
        </form>
        {/* Image */}
        <div className="flex-1 flex justify-center items-center max-md:mt-10">
          <Image
            src="/images/Contact.png"
            alt={t("contact_image_alt")}
            width={420}
            height={420}
            className="rounded-xl object-cover w-full h-auto max-w-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
