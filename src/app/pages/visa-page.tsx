import React from "react";
import VisaMain from "../components/visa-page-components/visa-main";
import { Navbar } from "../components/reusable/navbar";
import Footer from "../components/reusable/footer";

function VisaPage() {
  return (
    <div>
      <Navbar />
      <VisaMain />
      <Footer />
    </div>
  );
}

export default VisaPage;
