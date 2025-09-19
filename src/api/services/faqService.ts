import axiosInstance from "../axiosInstance";

export const faqService = {
  getFaqs: async (params?: {
    page?: number;
    search?: string;
    size?: number;
  }) => {
    const response = await axiosInstance.get("v1/faqs", {
      headers: {
        Accept: "application/json",
      },
      params,
    });
    return response.data;
  },
};
