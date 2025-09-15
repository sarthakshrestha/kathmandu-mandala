export interface ContactForm {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
}

export interface VisaForm {
  name: string;
  gender: string;
  dob: string;
  nationality: string;
  passport_number: string;
  passport_expiry: string;
  passport_type: string;
  arrival_date: string;
  visa_type: string;
  duration_of_stay: number;
  purpose_of_visit: string;
  address_in_destination?: string | null;
  point_of_entry: string;
  payment: File | string;
  passport: File | string;
}
