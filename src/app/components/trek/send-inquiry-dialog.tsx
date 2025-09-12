"use client";
import { useForm, FormProvider } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

export default function SendInquiryDialog() {
  const methods = useForm();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<string>("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="w-full rounded-xl bg-[#E3B7B7] text-[#761E25] py-4 font-links font-medium text-lg transition hover:bg-[#d6a3a3]"
          type="button"
        >
          Send Inquiry
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-3xl bg-[#FCF8F2] px-0 py-0"
        showCloseButton
      >
        <DialogHeader className="flex flex-row items-center gap-4 px-6 pt-6 pb-2">
          <img
            src="/images/trek/Trek1.png"
            alt="Trekking"
            className="rounded-lg w-16 h-16 object-cover"
          />
          <DialogTitle className="font-garamond text-2xl font-semibold">
            Trekking im Himalaya (14 Tage) Inquiry
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form
            className="w-full px-6 pb-6 pt-2"
            onSubmit={methods.handleSubmit((data) => {
              // handle submit here
              setOpen(false);
            })}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-links font-semibold mb-1">
                  First name*
                </label>
                <Input
                  {...methods.register("firstName", { required: true })}
                  placeholder="Enter your first name"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-links font-semibold mb-1">
                  Last name*
                </label>
                <Input
                  {...methods.register("lastName", { required: true })}
                  placeholder="Enter your last name"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-links font-semibold mb-1">
                  Email*
                </label>
                <Input
                  {...methods.register("email", { required: true })}
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <label className="block font-links font-semibold mb-1">
                  Phone / WhatsApp
                </label>
                <Input
                  {...methods.register("phone")}
                  placeholder="Enter your phone number"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-links font-semibold mb-1">
                  Preferred Start Date*
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-left"
                    >
                      <CalendarDays className="mr-2 text-[#D6A346]" />
                      <span className="text-muted-foreground">
                        {date ? date : "Select preferred start date"}
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <input
                      type="date"
                      className="border rounded-md px-2 py-1 w-full"
                      onChange={(e) => {
                        setDate(e.target.value);
                        methods.setValue("startDate", e.target.value);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block font-links font-semibold mb-1">
                  Number of People
                </label>
                <Input
                  {...methods.register("numPeople")}
                  placeholder="Enter Number of People"
                  type="number"
                  min={1}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-links font-semibold mb-1">
                Message / Questions
              </label>
              <Textarea
                {...methods.register("message")}
                placeholder="Feel free to share any messages or questions you have!"
                rows={3}
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-[#D6A346] hover:bg-[#c9a13e] text-[#23233B] font-links font-semibold px-6 py-2 rounded-lg shadow transition"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
