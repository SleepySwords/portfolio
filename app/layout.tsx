"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Theme, ThemeContext } from "./theme";

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
  const [theme, setTheme] = useState(Theme.Auto);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme != null) {
      console.log("ok: " + theme);
      if (theme == "dark") {
        setTheme(Theme.Dark);
      } else if (theme == "light") {
        setTheme(Theme.Light);
      } else {
        setTheme(Theme.Auto);
      }
    }
  }, []);

  function backgroundAndText() {
    switch (theme) {
      case Theme.Auto:
        return "bg-light text-dark dark:bg-dark dark:text-light";
      case Theme.Dark:
        return "bg-dark text-light";
      case Theme.Light:
        return "bg-light text-dark";
    }
  }

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
        className={`${inter.className} transition-colors ${backgroundAndText()}`}
      >
        <ThemeContext.Provider
          value={{
            theme: theme,
            setTheme: (theme) => {
              localStorage.setItem("theme", theme);
              console.log("test");
              setTheme(theme);
            },
          }}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
