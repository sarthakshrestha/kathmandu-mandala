import React from "react";
import { Navbar } from "../components/reusable/navbar";
import Footer from "../components/reusable/footer";
import PrivacyContent from "../components/privacy/privacy-main";

function PrivacyPage() {
  return (
    <div>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </div>
  );
}

export default PrivacyPage;
