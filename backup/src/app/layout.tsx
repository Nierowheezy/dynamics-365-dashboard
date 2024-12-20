import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LeftSidebar } from "@/components/left-sidebar";
import { TopBar } from "@/components/top-bar";
import { MainHeader } from "@/components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamics 365 Sales Hub",
  description: "Sales hub dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <MainHeader />
          <div className="flex flex-1 overflow-hidden">
            <LeftSidebar />
            <div className="flex flex-col flex-grow overflow-auto">
              <TopBar />
              <main className="flex-grow overflow-auto">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
