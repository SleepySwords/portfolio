import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";

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
    <main className="justify-top flex min-h-screen flex-col items-center p-8">
      <Navbar />
      <div className="secondary-colour mt-20 place-items-start text-3xl font-bold">
        My ramblings
      </div>
      <div className="mt-10 grid w-10/12 text-left">{children}</div>
    </main>
  );
}
