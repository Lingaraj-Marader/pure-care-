import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingWidgets from "@/components/FloatingWidgets";
import ConsultationModal from "@/components/ConsultationModal";

export const metadata: Metadata = {
  title: "Pure Care Auto Accessories | UAE's Premium Pure Care",
  description:
    "Pure Care Auto Accessories TR. L.L.C — UAE's premier car detailing, ceramic coating, PPF, paint protection and auto accessories in Sharjah, UAE. Contact: +971 58 636 8849 / +971 52 165 2323",
  keywords:
    "car detailing UAE, ceramic coating UAE, PPF UAE, paint protection Sharjah UAE, car polish, interior detailing, auto accessories, pure care, car wrapping, car tinting",
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
      <body className="min-h-screen flex flex-col bg-[#070f26] text-slate-100 overflow-x-hidden w-full m-0 p-0 selection:bg-sky-500 selection:text-white relative">
        <Preloader />
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
        <FloatingWidgets />
        <ConsultationModal />
      </body>
    </html>
  );
}

