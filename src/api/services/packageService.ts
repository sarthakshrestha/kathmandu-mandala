import axiosInstance from "../axiosInstance";

export const packageService = {
  getPackages: async (token?: string) => {
    const response = await axiosInstance.get("v1/packages", {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  },

  getPackageSlug: async (slug: string) => {
    const response = await axiosInstance.get(`v1/packages/${slug}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  },
};
