"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Receipt, CalendarDays, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { visaService } from "@/api/services/visaService";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useTranslation } from "@/app/hooks/use-translation";
import { FileText } from "lucide-react";
import { useEffect } from "react";
import { CheckCircle, Circle } from "lucide-react";
import { toast } from "sonner";
import { PopoverCalendar } from "@/components/ui/popover-calendar";
import { Loader2 } from "lucide-react";
import { X } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function RegisterFormDialog() {
  type RegisterFormValues = z.infer<typeof registerSchema>;

  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const occupationOptions = [
    { value: "student", label: t("occupation_student") || "Student" },
    { value: "business", label: t("occupation_business") || "Business" },
    { value: "tourist", label: t("occupation_tourist") || "Tourist" },
    { value: "other", label: t("occupation_other") || "Other" },
  ];
  const [loading, setLoading] = useState(false);

  const [paymentFile, setPaymentFile] = useState<File | undefined>(undefined);
  const [passportFile, setPassportFile] = useState<File | undefined>(undefined);

  const steps = [
    t("step_personal_information") || "Personal Information",
    t("step_travel_information") || "Travel Information",
    t("step_visa_details") || "Visa Details",
    t("step_passport_details") || "Passport Details",
    t("step_payment_details") || "Payment Details",
  ];

  useEffect(() => {
    form.setValue("payment", paymentFile);
    form.setValue("passport", passportFile);
  }, [paymentFile, passportFile]);

  const registerSchema = z.object({
    fullName: z
      .string()
      .min(1, t("form_full_name_required") || "Full name is required"),
    gender: z
      .string()
      .min(1, t("form_gender_required") || "Gender is required"),
    dateOfBirth: z.string().refine(
      (val) => {
        if (!val) return false;
        const date = new Date(val);
        return date < today;
      },
      {
        message:
          t("form_date_of_birth_invalid") ||
          "Date of birth must be before today.",
      }
    ),
    nationality: z
      .string()
      .min(1, t("form_nationality_required") || "Nationality is required"),
    passportNumber: z
      .string()
      .min(
        1,
        t("form_passport_number_required") || "Passport number is required"
      ),
    passportValidUntil: z
      .string()
      .min(
        1,
        t("form_passport_valid_until_required") ||
          "Passport valid until is required"
      ),
    typeOfPassport: z.enum(
      ["Ordinary", "Diplomatic", "Service", "Official", "Special"],
      {
        message:
          t("form_type_of_passport_required") ||
          "Select a valid passport type.",
      }
    ),
    address: z
      .string()
      .min(1, t("form_address_required") || "Address is required"),
    phoneNumber: z
      .string()
      .min(1, t("form_phone_number_required") || "Phone number is required")
      .regex(/^\d+$/, t("form_phone_number_invalid") || "Only numbers allowed"),
    email: z.string().email(t("form_email_invalid") || "Invalid email"),
    occupation: z
      .string()
      .min(1, t("form_occupation_required") || "Occupation is required"),
    travelDate: z
      .string()
      .min(1, t("form_travel_date_required") || "Travel date is required"),
    entryAirport: z
      .string()
      .min(1, t("form_entry_airport_required") || "Entry airport is required"),
    visaType: z.enum(
      [
        "Tourist",
        "Business",
        "Student",
        "Work",
        "Diplomatic",
        "Medical",
        "Pilgrimage",
        "Other",
      ],
      { message: t("form_visa_type_required") || "Select a valid visa type." }
    ),
    visaDays: z
      .string()
      .min(1, t("form_visa_days_required") || "Visa days is required"),
    payment: z.any().optional(),
    passport: z.any().optional(),
  });

  const stepFields: Array<Array<keyof RegisterFormValues>> = [
    [
      "fullName",
      "gender",
      "dateOfBirth",
      "nationality",
      "passportNumber",
      "passportValidUntil",
      "typeOfPassport",
      "address",
      "phoneNumber",
      "email",
      "occupation",
    ],
    ["travelDate", "entryAirport"],
    ["visaType", "visaDays", "payment", "passport"],
  ];

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      gender: "",
      dateOfBirth: "",
      nationality: "",
      passportNumber: "",
      passportValidUntil: "",
      typeOfPassport: undefined,
      address: "",
      phoneNumber: "",
      email: "",
      occupation: "",
      travelDate: "",
      entryAirport: "",
      visaType: undefined,
      visaDays: "",
      payment: undefined,
      passport: undefined,
    },
  });

  const handleNext = async () => {
    const valid = await form.trigger(stepFields[step]);
    if (valid) {
      setStep((s) => Math.min(steps.length - 1, s + 1));
    }
  };

  async function onSubmit(data: RegisterFormValues) {
    setLoading(true);
    try {
      // Prevent submission if payment or passport file is missing
      if (!data.payment || !data.passport) {
        toast.error(
          t("form_upload_required") ||
            "Please upload both passport and payment proof before submitting."
        );
        setLoading(false);
        return;
      }

      await visaService.sendVisa({
        name: data.fullName,
        gender: data.gender,
        dob: data.dateOfBirth,
        nationality: data.nationality,
        passport_number: data.passportNumber,
        passport_expiry: data.passportValidUntil,
        passport_type: data.typeOfPassport,
        arrival_date: data.travelDate,
        visa_type: data.visaType,
        duration_of_stay: Number(data.visaDays),
        purpose_of_visit: data.occupation,
        address_in_destination: data.address,
        point_of_entry: data.entryAirport,
        payment: data.payment,
        passport: data.passport,
      });
      toast.success(t("visa_submit_success") || "Visa application submitted!");
      form.reset();
      setStep(0);
      setOpen(false);
    } catch (error: any) {
      toast.error(
        t("visa_submit_error") ||
          error?.response?.data?.message ||
          "Failed to submit visa application."
      );
    } finally {
      setLoading(false);
    }
  }

  console.log("Form errors:", form.formState.errors);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="bg-[#B94B4B] hover:bg-[#a13e3e] text-white font-links font-semibold py-3 sm:py-3 rounded-lg transition text-sm sm:text-base w-full"
          onClick={() => setOpen(true)}
        >
          {t("start_application_button") || "Start Application"}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#FAF6F0] p-0 sm:p-0 rounded-xl border-none sm:max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="px-4 pt-4 pb-2 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-[#23233B]" />
            <DialogTitle className="font-garamond text-xl sm:text-2xl text-[#23233B]">
              {t("pre_registration_heading") || "Visa Pre-Registration"}
            </DialogTitle>
          </div>

          {/* Mobile View */}
          <div className="sm:hidden space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-garamond text-lg font-semibold text-[#23233B]">
                {steps[step]}
              </span>
              <span className="text-sm text-[#A89C8E]">
                {step + 1} / {steps.length}
              </span>
            </div>
            <Progress
              value={((step + 1) / steps.length) * 100}
              className="h-1.5 bg-[#E5E1DC]"
            />
            <div className="flex justify-between text-xs text-[#A89C8E] px-1 max-sm:hidden">
              {steps.map((label, idx) => (
                <span
                  key={label}
                  className={idx <= step ? "text-[#7B2D2D] font-medium" : ""}
                >
                  •
                </span>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:flex gap-4 flex-wrap">
            {steps.map((label, idx) => (
              <div
                key={label}
                className={`flex items-center gap-2 ${
                  idx < step
                    ? "text-[#7B2D2D] font-semibold"
                    : step === idx
                    ? "text-[#23233B] font-semibold"
                    : "text-[#A89C8E]"
                }`}
              >
                {idx < step ? (
                  <CheckCircle className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#A89C8E] text-xs">
                    {idx + 1}
                  </span>
                )}
                <span className="font-garamond text-lg">{label}</span>
                {idx < steps.length - 1 && (
                  <span className="mx-2 h-px w-12 bg-[#E5E1DC] inline-block" />
                )}
              </div>
            ))}
          </div>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 pb-6">
            {step === 0 && (
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
                <FormField
                  name="fullName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_full_name") || "Full name"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder={t("form_full_name")} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="gender"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_gender") || "Gender"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            {field.value
                              ? {
                                  male: t("gender_male"),
                                  female: t("gender_female"),
                                  other: t("gender_other"),
                                }[field.value] || field.value
                              : t("form_select_gender") || "Select gender"}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">
                              {t("gender_male") || "Male"}
                            </SelectItem>
                            <SelectItem value="female">
                              {t("gender_female") || "Female"}
                            </SelectItem>
                            <SelectItem value="other">
                              {t("gender_other") || "Other"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="dateOfBirth"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PopoverCalendar
                          label={t("form_date_of_birth") || "Date of Birth"}
                          value={field.value}
                          onChange={field.onChange}
                          min={new Date(1900, 0, 1)}
                          max={new Date()}
                          disabled={field.disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="nationality"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_nationality") || "Nationality"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder={t("form_nationality")} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="passportNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>
                          {t("form_passport_number") || "Passport Number"}
                        </Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("form_passport_number")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="passportValidUntil"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PopoverCalendar
                          label={
                            t("form_passport_valid_until") ||
                            "Passport Valid Until"
                          }
                          value={field.value}
                          onChange={field.onChange}
                          min={new Date()}
                          max={
                            new Date(
                              new Date().getFullYear() + 100,
                              new Date().getMonth(),
                              new Date().getDate()
                            )
                          }
                          disabled={field.disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="typeOfPassport"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>
                          {t("form_type_of_passport") || "Type of Passport"}
                        </Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            {field.value
                              ? field.value
                              : t("form_select_type_of_passport") ||
                                "Select type of passport"}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Ordinary">Ordinary</SelectItem>
                            <SelectItem value="Diplomatic">
                              Diplomatic
                            </SelectItem>
                            <SelectItem value="Service">Service</SelectItem>
                            <SelectItem value="Official">Official</SelectItem>
                            <SelectItem value="Special">Special</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="address"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_address") || "Address"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder={t("form_address")} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phoneNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>
                          {t("form_phone_number") || "Phone Number"}
                        </Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("form_phone_number")}
                          type="tel"
                          inputMode="numeric"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_email") || "Email Address"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder={t("form_email")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-4 col-span-2">
                  <FormField
                    name="occupation"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel asChild>
                          <Label>{t("form_occupation") || "Occupation"}</Label>
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              {field.value
                                ? occupationOptions.find(
                                    (opt) => opt.value === field.value
                                  )?.label
                                : t("form_select_occupation") ||
                                  "Select your occupation"}
                            </SelectTrigger>
                            <SelectContent>
                              {occupationOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
                <FormField
                  name="travelDate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PopoverCalendar
                          label={
                            t("form_travel_date") ||
                            "Planned Travel Date (approximate)"
                          }
                          value={field.value}
                          onChange={field.onChange}
                          min={new Date()} // Only allow today and future dates
                          disabled={field.disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  name="nepalAddress"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>
                          {t("form_nepal_address") || "Address in Nepal"}
                        </Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("form_nepal_address_placeholder")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <FormField
                  name="entryAirport"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>
                          {t("form_entry_airport") ||
                            "Point of Entry into Nepal (Airport)"}
                        </Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("form_entry_airport_placeholder")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
                <FormField
                  name="visaType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_visa_type") || "Visa Type"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            {field.value
                              ? field.value
                              : t("form_select_visa_type") ||
                                "Select visa type"}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Tourist">Tourist</SelectItem>
                            <SelectItem value="Business">Business</SelectItem>
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Work">Work</SelectItem>
                            <SelectItem value="Diplomatic">
                              Diplomatic
                            </SelectItem>
                            <SelectItem value="Medical">Medical</SelectItem>
                            <SelectItem value="Pilgrimage">
                              Pilgrimage
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="visaDays"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <Label>{t("form_visa_days") || "Visa for Days"}</Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("form_visa_days_placeholder")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {step === 3 && (
              <div className="flex flex-col gap-4">
                <FormField
                  name="passport"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel asChild>
                        <Label className="text-lg font-semibold">
                          {t("form_passport") || "Passport Details"}
                        </Label>
                      </FormLabel>
                      <p className="text-sm text-[#666] mb-4">
                        {t("form_passport_description") ||
                          "Take a photo of your passport bio page. This is the page with your photo."}
                      </p>
                      <FormControl>
                        <div className="w-full">
                          {!passportFile ? (
                            <div
                              className="border-2 border-dashed border-[#E5E1DC] rounded-lg p-8 text-center bg-white"
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const file = e.dataTransfer.files?.[0];
                                if (
                                  file &&
                                  [
                                    "application/pdf",
                                    "image/png",
                                    "image/jpeg",
                                    "image/jpg",
                                  ].includes(file.type)
                                ) {
                                  setPassportFile(file);
                                  field.onChange(file);
                                } else {
                                  toast.error(
                                    t("file_type_error") ||
                                      "File must be PDF, PNG, JPG, or JPEG."
                                  );
                                }
                              }}
                            >
                              <div className="flex flex-col items-center gap-4">
                                <div className="relative w-full max-w-md aspect-[3/2] mb-4">
                                  <img
                                    src="/images/ref/passport-ref.png"
                                    alt="Passport reference"
                                    className="w-full h-full object-contain opacity-60"
                                  />
                                </div>
                                <p className="text-[#666] mb-1">
                                  {t("form_passport_drag") ||
                                    "Drag and drop an image or PDF file to upload"}
                                </p>
                                <p className="text-xs text-[#A89C8E] mb-4">
                                  {t("form_passport_formats") ||
                                    "JPG, PNG or PDF formats, no larger than 10 MB"}
                                </p>
                                <div>
                                  <input
                                    type="file"
                                    id="passport-upload"
                                    accept=".pdf,.png,.jpg,.jpeg"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (
                                        file &&
                                        ![
                                          "application/pdf",
                                          "image/png",
                                          "image/jpeg",
                                          "image/jpg",
                                        ].includes(file.type)
                                      ) {
                                        toast.error(
                                          t("file_type_error") ||
                                            "File must be PDF, PNG, JPG, or JPEG."
                                        );
                                        e.target.value = "";
                                        setPassportFile(undefined);
                                        field.onChange(undefined);
                                        return;
                                      }
                                      setPassportFile(file);
                                      field.onChange(file);
                                    }}
                                  />
                                  <Button
                                    type="button"
                                    variant="default"
                                    onClick={() =>
                                      document
                                        .getElementById("passport-upload")
                                        ?.click()
                                    }
                                  >
                                    {t("form_choose_photo") || "Choose a photo"}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="border rounded-lg p-4 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-5 h-5 text-[#23233B]" />
                                  <span className="text-sm text-[#23233B] font-medium">
                                    {passportFile.name}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setPassportFile(undefined);
                                    field.onChange(undefined);
                                  }}
                                  className="text-[#B94B4B] hover:text-[#a13e3e] transition-colors"
                                  aria-label="Remove file"
                                >
                                  <X size={20} />
                                </button>
                              </div>
                              {passportFile.type.startsWith("image/") && (
                                <div className="relative w-full max-w-md aspect-[3/2] mt-4 mx-auto">
                                  <img
                                    src={URL.createObjectURL(passportFile)}
                                    alt="Passport preview"
                                    className="w-full h-full object-contain rounded-md"
                                    onLoad={() =>
                                      URL.revokeObjectURL(
                                        URL.createObjectURL(passportFile)
                                      )
                                    }
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {step === 4 && (
              <div className="flex flex-col gap-8">
                {/* Visa Fee Section */}
                <div>
                  <h2 className="text-xl font-semibold text-[#23233B] mb-2">
                    {t("pay_visa_fee") || "Pay your Visa Fee"}
                  </h2>
                  <p className="text-sm text-[#666] mb-6">
                    {t("visa_fee_description") ||
                      "Choose the days you wish to stay in Nepal based on your preferences; the fee includes a service charge."}
                  </p>
                  <FormField
                    name="visaDays"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                              { days: 15, price: 30 },
                              { days: 30, price: 50 },
                              { days: 90, price: 125 },
                            ].map(({ days, price }) => (
                              <Card
                                key={days}
                                className={`bg-white transition-colors cursor-pointer ${
                                  field.value === String(days)
                                    ? "border-2 border-[#B94B4B]"
                                    : "hover:border-[#B94B4B]"
                                }`}
                                onClick={() => field.onChange(String(days))}
                              >
                                <CardContent>
                                  <div className="flex flex-col mx-auto">
                                    <div className="flex items-center gap-2 mb-4 mx-auto">
                                      <CalendarDays className="w-5 h-5 text-[#B94B4B]" />
                                      <span className="text-xl font-semibold text-[#23233B]">
                                        {days} Days
                                      </span>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className="bg-[#D6A346] text-zinc-900 border-none rounded-full px-4 py-2 text-base mx-auto"
                                    >
                                      € {price}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Payment Details Section */}
                <div className="max-w-6xl max-sm:w-full mx-auto">
                  <h2 className="text-xl font-semibold text-[#23233B] mb-6 ">
                    {t("payment_details") || "Payment Details"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#666]">
                          {t("bank_name") || "Bank Name"}
                        </span>
                        <span className="font-medium">Your Bank Name</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#666]">
                          {t("account_number") || "Account Number"}
                        </span>
                        <span className="font-medium">30123 456 789 456</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#666]">
                          {t("account_type") || "Account Type"}
                        </span>
                        <span className="font-medium">Savings</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#666]">IBAN</span>
                        <span className="font-medium">XXXXXXXX</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-sm text-[#666] mb-2">
                        {t("scan_to_pay") || "Scan to pay"}
                      </span>
                      <img
                        src="/images/qr-code.png"
                        alt="QR Code"
                        className="w-32 h-32"
                      />
                    </div>
                  </div>
                </div>

                {/* Upload Payment Proof Section */}
                <FormField
                  name="payment"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel asChild>
                        <Label className="text-xl font-semibold text-[#23233B]">
                          {t("upload_payment_proof") ||
                            "Upload Proof of Payment"}
                        </Label>
                      </FormLabel>
                      <FormControl>
                        <div className="w-full">
                          {!paymentFile ? (
                            <div
                              className="border-2 border-dashed border-[#E5E1DC] rounded-lg p-8 text-center bg-white mt-4"
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const file = e.dataTransfer.files?.[0];
                                if (
                                  file &&
                                  [
                                    "application/pdf",
                                    "image/png",
                                    "image/jpeg",
                                    "image/jpg",
                                  ].includes(file.type)
                                ) {
                                  setPaymentFile(file);
                                  field.onChange(file);
                                } else {
                                  toast.error(
                                    t("file_type_error") ||
                                      "File must be PDF, PNG, JPG, or JPEG."
                                  );
                                }
                              }}
                            >
                              <div className="flex flex-col items-center gap-4">
                                <Upload className="w-12 h-12 text-[#23233B] opacity-50" />
                                <p className="text-[#666]">
                                  {t("form_payment_drag") ||
                                    "Drag and drop an image or PDF file to upload"}
                                </p>
                                <p className="text-xs text-[#A89C8E]">
                                  {t("form_payment_formats") ||
                                    "JPG, PNG or PDF formats, no larger than 10 MB"}
                                </p>
                                <div>
                                  <input
                                    type="file"
                                    id="payment-upload"
                                    accept=".pdf,.png,.jpg,.jpeg"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (
                                        file &&
                                        ![
                                          "application/pdf",
                                          "image/png",
                                          "image/jpeg",
                                          "image/jpg",
                                        ].includes(file.type)
                                      ) {
                                        toast.error(
                                          t("file_type_error") ||
                                            "File must be PDF, PNG, JPG, or JPEG."
                                        );
                                        e.target.value = "";
                                        setPaymentFile(undefined);
                                        field.onChange(undefined);
                                        return;
                                      }
                                      setPaymentFile(file);
                                      field.onChange(file);
                                    }}
                                  />
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className="bg-white hover:bg-gray-50"
                                    onClick={() =>
                                      document
                                        .getElementById("payment-upload")
                                        ?.click()
                                    }
                                  >
                                    {t("form_choose_payment") ||
                                      "Choose payment proof"}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="border rounded-lg p-4 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Receipt className="w-5 h-5 text-[#23233B]" />
                                  <span className="text-sm text-[#23233B] font-medium">
                                    {paymentFile.name}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setPaymentFile(undefined);
                                    field.onChange(undefined);
                                  }}
                                  className="text-[#B94B4B] hover:text-[#a13e3e] transition-colors"
                                  aria-label="Remove file"
                                >
                                  <X size={20} />
                                </button>
                              </div>
                              {paymentFile.type.startsWith("image/") && (
                                <div className="relative w-full max-w-md aspect-[3/2] mt-4 mx-auto">
                                  <img
                                    src={URL.createObjectURL(paymentFile)}
                                    alt="Payment preview"
                                    className="w-full h-full object-contain rounded-md"
                                    onLoad={() =>
                                      URL.revokeObjectURL(
                                        URL.createObjectURL(paymentFile)
                                      )
                                    }
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <DialogFooter className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
              {step > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  className="bg-gray-200"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={loading}
                >
                  {t("form_back") || "Back"}
                </Button>
              )}

              {step < steps.length - 1 && (
                <Button
                  type="button"
                  variant="default"
                  className="bg-[#B94B4B] text-white flex items-center justify-center"
                  onClick={handleNext}
                  disabled={
                    loading ||
                    (step === 3 && !passportFile) ||
                    (step === 4 && !paymentFile)
                  }
                >
                  {t("form_next") || "Next"}
                </Button>
              )}

              {step === steps.length - 1 && (
                <Button
                  type="submit"
                  variant="default"
                  className="bg-[#B94B4B] text-white"
                  disabled={loading}
                >
                  {loading && <Loader2 className="animate-spin mr-1 w-5 h-5" />}
                  {t("form_submit") || "Submit"}
                </Button>
              )}
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
