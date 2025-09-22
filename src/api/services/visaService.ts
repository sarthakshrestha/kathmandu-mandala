import axiosInstance from "../axiosInstance";
import type { VisaForm } from "@/types/Global";

export const visaService = {
  sendVisa: async (data: VisaForm, token?: string) => {
    // Log missing or required fields for debugging
    const requiredFields = [
      "name",
      "gender",
      "dob",
      "nationality",
      "passport_number",
      "passport_expiry",
      "passport_type",
      "arrival_date",
      "visa_type",
      "duration_of_stay",
      "purpose_of_visit",
      "point_of_entry",
      "payment",
      "passport",
    ];
    const missingFields = requiredFields.filter(
      (key) => !data[key as keyof VisaForm]
    );
    if (missingFields.length > 0) {
      console.warn("Missing required fields:", missingFields);
    }

    const formData = new FormData();
    formData.append("name", data.name ?? "");
    formData.append("gender", data.gender ?? "");
    formData.append("dob", data.dob ?? "");
    formData.append("nationality", data.nationality ?? "");
    formData.append("passport_number", data.passport_number ?? "");
    formData.append("passport_expiry", data.passport_expiry ?? "");
    formData.append("passport_type", data.passport_type ?? "");
    formData.append("address", data.address ?? "");
    formData.append("phone", data.phone ?? "");
    formData.append("occupation", data.occupation ?? "");
    formData.append("arrival_date", data.arrival_date ?? "");
    formData.append("visa_type", data.visa_type ?? "");
    formData.append(
      "duration_of_stay",
      data.duration_of_stay?.toString() ?? ""
    );
    formData.append("purpose_of_visit", data.purpose_of_visit ?? "");
    formData.append(
      "address_in_destination",
      data.address_in_destination ?? ""
    );
    formData.append("point_of_entry", data.point_of_entry ?? "");
    formData.append("payment", data.payment ?? "");
    formData.append("passport", data.passport ?? "");

    const response = await axiosInstance.post("/v1/visa", formData, {
      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
