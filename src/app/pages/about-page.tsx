import React from "react";
import AboutHeader from "../components/about/about-header";
import { Navbar } from "../components/reusable/navbar";
import Footer from "../components/reusable/footer";
import Component5 from "../components/landing-page-components/component-5";
import AboutStats from "../components/about/about-stats";
import AboutPeople from "../components/about/about-people";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <Component5 />
      <AboutStats />
      <AboutPeople />
      <Footer />
    </div>
  );
}

export default AboutPage;
