"use client";
import Hero from "../components/hero/hero-main";
import Component1 from "../components/landing-page-components/component-1";
import { Navbar } from "../components/reusable/navbar";

export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Component1 />
    </div>
  );
}
