import axiosInstance from "../axiosInstance";
import { ContactForm } from "@/types/Global";
export const contactService = {
  sendContact: async (data: ContactForm) => {
    const response = await axiosInstance.post("/v1/contact", data);
    return response.data;
  },
};
