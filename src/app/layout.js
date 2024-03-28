/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./context/SidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trade Journey",
  description: "Made with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
