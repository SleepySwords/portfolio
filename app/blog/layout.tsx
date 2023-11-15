import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SleepySwords",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="justify-top flex min-h-screen flex-col items-center p-8">
          <Navbar />
          <div className="secondary-colour mt-20 place-items-start text-3xl font-bold">
            My ramblings
          </div>
          <div className="mt-10 grid w-10/12 text-left">{children}</div>
        </main>
      </body>
    </html>
  );
}
