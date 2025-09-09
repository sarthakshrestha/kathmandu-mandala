"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/app/hooks/use-translation";
import { Calendar } from "@/components/ui/calendar";
import { MailIcon, PhoneCallIcon } from "lucide-react";

export default function ContactMain() {
  const { t, isLoaded } = useTranslation();
  const [mode, setMode] = useState<"contact" | "schedule">("contact");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
    date: undefined as Date | undefined,
    time: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName) newErrors.firstName = t("contact_error_first_name");
    if (!form.lastName) newErrors.lastName = t("contact_error_last_name");
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = t("contact_error_email");
    if (!form.phone) newErrors.phone = t("contact_error_phone");
    if (mode === "contact") {
      if (!form.message) newErrors.message = t("contact_error_message");
    } else {
      if (!form.date) newErrors.date = t("schedule_error_date");
      if (!form.time) newErrors.time = t("schedule_error_time");
    }
    if (!form.agree) newErrors.agree = t("contact_error_agree");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (date?: Date) => {
    setForm((prev) => ({
      ...prev,
      date,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(
        mode === "contact"
          ? t("contact_success_message")
          : t("schedule_success_message")
      );
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
        date: undefined,
        time: "",
      });
      setErrors({});
    }
  };

  if (!isLoaded) return null;

  return (
    <section className="bg-[#FAF6F0] py-12 px-2 max-sm:px-8">
      <div className=" mx-auto flex flex-col md:flex-row gap-10 items-center max-w-7xl">
        {/* Mode Switch Buttons */}
        <div className="flex flex-row gap-4 mb-8 max-sm:mb-2 w-full max-w-xs sm:flex-col sm:w-16 max-sm:items-end max-sm:justify-end">
          <button
            type="button"
            className={`flex items-center justify-center py-4 max-sm:px-4 rounded-lg transition border ${
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
            className={`flex items-center justify-center py-4 max-sm:px-4 rounded-lg transition border ${
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
          onSubmit={handleSubmit}
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
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                  errors.firstName ? "border-[#9A2731]" : ""
                }`}
                placeholder={t("contact_first_name_placeholder")}
              />
              {errors.firstName && (
                <span className="text-[#9A2731] text-xs">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div>
              <label className="block font-links mb-1">
                {t("contact_last_name")}
              </label>
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                  errors.lastName ? "border-[#9A2731]" : ""
                }`}
                placeholder={t("contact_last_name_placeholder")}
              />
              {errors.lastName && (
                <span className="text-[#9A2731] text-xs">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-links mb-1">
              {t("contact_email")}
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                errors.email ? "border-[#9A2731]" : ""
              }`}
              placeholder={t("contact_email_placeholder")}
            />
            {errors.email && (
              <span className="text-[#9A2731] text-xs">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-links mb-1">
              {t("contact_phone")}
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                errors.phone ? "border-[#9A2731]" : ""
              }`}
              placeholder={t("contact_phone_placeholder")}
            />
            {errors.phone && (
              <span className="text-[#9A2731] text-xs">{errors.phone}</span>
            )}
          </div>
          {mode === "contact" ? (
            <div className="mb-4">
              <label className="block font-links mb-1">
                {t("contact_message")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links min-h-[80px] ${
                  errors.message ? "border-[#9A2731]" : ""
                }`}
                placeholder={t("contact_message_placeholder")}
              />
              {errors.message && (
                <span className="text-[#9A2731] text-xs">{errors.message}</span>
              )}
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block font-links mb-1">
                  {t("schedule_date")}
                </label>
                <Calendar
                  selected={form.date}
                  onSelect={handleDateChange}
                  mode="single"
                  className={`mb-2 ${
                    errors.date ? "border-[#9A2731] border rounded-md" : ""
                  }`}
                />
                {errors.date && (
                  <span className="text-[#9A2731] text-xs">{errors.date}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-links mb-1">
                  {t("schedule_time")}
                </label>
                <input
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  className={`w-full rounded-md border border-[#e5e5e5] px-4 py-2 bg-white font-links ${
                    errors.time ? "border-[#9A2731]" : ""
                  }`}
                  placeholder={t("schedule_time_placeholder")}
                />
                {errors.time && (
                  <span className="text-[#9A2731] text-xs">{errors.time}</span>
                )}
              </div>
            </>
          )}
          <div className="flex items-center mb-6">
            <input
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
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
              {errors.agree}
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
        <div className="flex-1 flex justify-center items-center">
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
