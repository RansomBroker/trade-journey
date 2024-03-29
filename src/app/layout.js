/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./includes/Sidebar";
import Navbar from "./includes/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trade Journey",
  description: "Made with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <main className="flex min-h-screen w-full items-stretch">
            <main className="min-h-0 flex-1 flex overflow-hidden">
              <Sidebar />
              <div className="p-4 lg:p-10 w-full">
                <Navbar />
                {children}
              </div>
            </main>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
