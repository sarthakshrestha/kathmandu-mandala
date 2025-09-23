"use client";
import LandingPage from "./pages/landing-page";
import { useSeo } from "./hooks/use-seo";

export default function Home() {
  useSeo("HOME");
  return <LandingPage />;
}
