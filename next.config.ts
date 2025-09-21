import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  /* config options here */
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://kathmandumandala.de" : "",
};

export default nextConfig;
