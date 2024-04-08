import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

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
  // const [theme, setTheme] = useState("dark");
  // useEffect(() => {
  // 	let theme = localStorage.getItem("theme");
  // 	if (theme != null && theme in ["light", "dark"]) {
  // setTheme(theme)
  // 	} else {}
  // }, [theme]);

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script src="/load.js" />
        <Script
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.className} bg-light text-dark dark:bg-dark dark:text-light`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

//        <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
//        <script
//          // eslint-disable-next-line react/no-danger
//          dangerouslySetInnerHTML={{
//            __html: `mermaid.initialize({startOnLoad: true});`,
//          }}
//        />
