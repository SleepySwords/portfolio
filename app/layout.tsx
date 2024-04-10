import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

//export const metadata: Metadata = {
//  title: "SleepySwords",
//  description: "Portfolio website",
//};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script src="/load.js" />
        {/* eslint-disable-next-line */}
        <Script
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.className} bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
