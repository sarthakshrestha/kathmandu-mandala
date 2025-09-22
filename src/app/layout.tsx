import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/reusable/navbar";
import Footer from "./components/reusable/footer";
import AppClientWrapper from "./wrappers/app-client-wrapper";
import { Toaster } from "sonner";
import Script from "next/script";
import Head from "next/head";
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
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WWSFTRYVMW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WWSFTRYVMW');
          `}
        </Script>
      </Head>
      <body
        className={`${raleway.variable} ${garamond.variable} antialiased font-links`}
      >
        <AppClientWrapper>
          <Navbar />
          {children}
          <Toaster richColors position="top-center" />
          <Footer />
        </AppClientWrapper>
      </body>
    </html>
  );
}
