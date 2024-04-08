import type { Metadata } from "next";
import "../globals.css";

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
    <main className="justify-top flex flex-col items-center p-8">
      <div className="place-items-start text-3xl font-bold text-secondary">
        My ramblings
      </div>
      <div className="mt-10 grid w-10/12 text-left">{children}</div>
    </main>
  );
}
