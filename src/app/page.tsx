"use client";
import Hero from "./components/hero/hero-main";
import { Navbar } from "./components/reusable/navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
    </div>
  );
}
