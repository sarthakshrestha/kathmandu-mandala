import React from "react";
import { Navbar } from "../components/reusable/navbar";
import ContactMain from "../components/contact/contact-main";
import Footer from "../components/reusable/footer";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactMain />
      <Footer />
    </div>
  );
}

export default ContactPage;
