import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingWidgets from "@/components/FloatingWidgets";
import ConsultationModal from "@/components/ConsultationModal";

export const metadata: Metadata = {
  title: "Pure Care Auto Accessories | Premium Car Care in the UAE",
  description:
    "Pure Care Auto Accessories TR. L.L.C — Premium car detailing, ceramic coating, PPF, paint protection and auto accessories services across the UAE. Contact: +971 58 636 8849",
  keywords:
    "car detailing UAE, ceramic coating UAE, PPF UAE, paint protection UAE, car polish UAE, interior detailing UAE, auto accessories UAE, pure care, car wrapping UAE, car tinting UAE",
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
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWidgets />
        <ConsultationModal />
      </body>
    </html>
  );
}
