import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";

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
    <div className="justify-top flex flex-col min-h-screen">
      <Navbar />
      <main className="justify-top flex flex-col items-center p-8">
        <div className="secondary-colour place-items-start text-3xl font-bold">
          My ramblings
        </div>
        <div className="mt-10 grid w-10/12 text-left">{children}</div>
      </main>
    </div>
  );
}
