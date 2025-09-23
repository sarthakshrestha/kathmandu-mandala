"use client";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "@/app/hooks/use-translation";
import { packageService } from "@/api/services/packageService";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { PopoverCalendar } from "@/components/ui/popover-calendar";

const inquirySchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  start_date: z.string().min(1, "Start date is required"),
  number_of_people: z
    .union([z.number().min(1, "At least 1 person is required"), z.null()])
    .refine((val) => val !== null, "At least 1 person is required"),
  message: z.string().optional(),
});
type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function PackageDialog({ packageId }: { packageId: number }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const methods = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      start_date: "",
      number_of_people: null,
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    try {
      await packageService.sendPackageEnquiry({
        package_id: packageId,
        ...data,
      });
      toast.success("Inquiry sent successfully!");
      methods.reset();
      setOpen(false);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send inquiry. Please try again."
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="w-full rounded-xl bg-[#E3B7B7] text-[#761E25] py-4 font-links font-medium text-lg transition hover:bg-[#d6a3a3]"
          type="button"
        >
          {t("send_inquiry") || "Send Inquiry"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-[#FCF8F2] px-0 py-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="font-garamond text-2xl font-semibold">
            {t("inquiry_title") || "Send Inquiry"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form
            className="w-full px-6 pb-6 pt-2"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                name="first_name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("first_name") || "First name"}*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("first_name") || "Enter your first name"}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="last_name"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("last_name") || "Last name"}*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("last_name") || "Enter your last name"}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email") || "Email"}*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("email") || "Enter your email"}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("phone") || "Phone / WhatsApp"}*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("phone") || "Enter your phone number"}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="start_date"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t("start_date") || "Preferred Start Date"}*
                    </FormLabel>
                    <FormControl>
                      <PopoverCalendar
                        value={field.value}
                        onChange={field.onChange}
                        min={new Date()}
                        max={
                          new Date(
                            new Date().getFullYear() + 2,
                            new Date().getMonth(),
                            new Date().getDate()
                          )
                        }
                        disabled={false}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="number_of_people"
                control={methods.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t("number_of_people") || "Number of People"}*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val === "" || /^[0-9]+$/.test(val)) {
                            field.onChange(val === "" ? "" : Number(val));
                          }
                        }}
                        placeholder={
                          t("number_of_people") || "Enter Number of People"
                        }
                        type="number"
                        min={1}
                        inputMode="numeric"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="message"
              control={methods.control}
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("message") || "Message / Questions"}</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={
                        t("message_placeholder") ||
                        "Feel free to share any messages or questions you have!"
                      }
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex justify-end mt-6">
              <Button
                type="submit"
                className="bg-[#D6A346] hover:bg-[#c9a13e] text-[#23233B] font-links font-semibold px-6 py-2 rounded-lg shadow transition"
              >
                {t("send_inquiry") || "Send Inquiry"}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
