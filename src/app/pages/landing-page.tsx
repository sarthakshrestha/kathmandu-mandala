"use client";
import Hero from "../components/hero/hero-main";
import Component1 from "../components/landing-page-components/component-1";
import { Navbar } from "../components/reusable/navbar";
import Component3 from "../components/landing-page-components/component-3";
import Component2 from "../components/landing-page-components/component-2";
import Component4 from "../components/landing-page-components/component-4";
export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}
