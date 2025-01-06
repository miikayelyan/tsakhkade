import { ReactNode } from "react";
import "../globals.css";
import Header from "../components/Header/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="relative">
      <body>
        <Header />
        {children}
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
