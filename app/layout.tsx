import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const body = Rubik({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "H&D Heating and Air | 24/7 AC & Heating Repair in Sacramento",
  description:
    "Owner-led HVAC company serving the Sacramento area. Same-day AC repair, heater and furnace repair, system replacement and commercial A/C. 5.0 stars from 335 Google reviews. Call (916) 936-6525, 24/7.",
  openGraph: {
    title: "H&D Heating and Air | AC & Heating Repair in Sacramento",
    description: "24/7 heating and air conditioning repair from Humberto and the H&D team. 5.0 stars, 335 Google reviews. Call (916) 936-6525.",
    type: "website",
    locale: "en_US",
    images: ["/images/p8.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
