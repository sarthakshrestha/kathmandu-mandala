"use client";
import Hero from "../components/hero/hero-main";
import Component1 from "../components/landing-page-components/component-1";
import { Navbar } from "../components/reusable/navbar";
import Component3 from "../components/landing-page-components/component-3";
import Component2 from "../components/landing-page-components/component-2";
import Component4 from "../components/landing-page-components/component-4";
import Component5 from "../components/landing-page-components/component-5";
import Component6 from "../components/landing-page-components/component-6";
import Component7 from "../components/landing-page-components/component-7";
import Footer from "../components/reusable/footer";
export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Footer />
    </div>
  );
}
