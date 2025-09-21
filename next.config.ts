import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://www.kathmandumandala.de"
      : "",
};

export default nextConfig;
