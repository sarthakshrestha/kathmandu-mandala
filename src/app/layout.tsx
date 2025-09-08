import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/reusable/navbar";
import Footer from "./components/reusable/footer";
import AppClientWrapper from "./wrappers/app-client-wrapper";
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kathmandu Mandala",
  description: "Destination for Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${garamond.variable} antialiased font-links`}
      >
        <AppClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </AppClientWrapper>
      </body>
    </html>
  );
}
