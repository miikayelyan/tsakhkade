import type { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Tsakhkadé Hotel",
  description:
    "Experience luxury and comfort at Tsakhkadé Hotel in Tsakhkadzor.",
  keywords: ["hotel", "luxury", "Tsakhkadzor"],
  openGraph: {
    title: "Tsakhkadé Hotel",
    description:
      "Enjoy your stay at Tsakhkadé Hotel in the heart of Tsakhkadzor.",
    url: "https://tsakhkade.vercel.app",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="relative">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
