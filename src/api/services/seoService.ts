import axiosInstance from "../axiosInstance";

export const seoService = {
  getSeo: async (page: string, token?: string) => {
    const response = await axiosInstance.get(`/v1/seo/${page}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  },
};
