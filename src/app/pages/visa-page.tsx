import React from "react";
import VisaMain from "../components/visa-page-components/visa-main";
import { Navbar } from "../components/reusable/navbar";
import Footer from "../components/reusable/footer";
import VisaFAQ from "../components/visa-page-components/visa-faq";

function VisaPage() {
  return (
    <div>
      <Navbar />
      <VisaMain />
      <VisaFAQ />
      <Footer />
    </div>
  );
}

export default VisaPage;
