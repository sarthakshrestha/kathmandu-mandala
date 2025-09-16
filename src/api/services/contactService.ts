import axiosInstance from "../axiosInstance";
import { ContactForm } from "@/types/Global";
import type { CallScheduleForm } from "@/types/Global";
export const contactService = {
  sendContact: async (data: ContactForm) => {
    const response = await axiosInstance.post("/v1/contact", data);
    return response.data;
  },
  sendCallSchedule: async (data: CallScheduleForm) => {
    const response = await axiosInstance.post("/v1/call-schedule", data, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  },
};
