"use client";

import { useEffect } from "react";

import * as React from "react";

export default function Math({ children }) {
  useEffect(() => {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typeset();
    }
  }, []);

  return <div>{children}</div>;
}
