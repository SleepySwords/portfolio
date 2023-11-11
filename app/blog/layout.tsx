import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SleepySwords",
  description: "Portfolio website",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="justify-top flex min-h-screen flex-col items-center p-8">
          <Navbar />
          <Sidebar toc={["etst"]} />
          {children}
        </main>
      </body>
    </html>
  );
}
