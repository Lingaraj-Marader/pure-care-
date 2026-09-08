import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingWidgets from "@/components/FloatingWidgets";
import ConsultationModal from "@/components/ConsultationModal";

export const metadata: Metadata = {
  title: "Pure Care Auto Accessories | Premium Car Care for the Middle East Climate",
  description:
    "Pure Care Auto Accessories TR. L.L.C — Premium car detailing, ceramic coating, PPF, paint protection and auto accessories services engineered for the Middle East climate. Contact: +971 58 636 8849 / +971 52 165 2323",
  keywords:
    "car detailing Middle East climate, ceramic coating Middle East climate, PPF Middle East climate, paint protection Middle East climate, car polish, interior detailing, auto accessories, pure care, car wrapping, car tinting",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased w-full">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden w-full m-0 p-0">
        <Preloader />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWidgets />
        <ConsultationModal />
      </body>
    </html>
  );
}
