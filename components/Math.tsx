"use client";

import { useEffect } from "react";

import * as React from "react";
import mermaid from "mermaid";

export default function Math({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typeset();
    }
  }, []);

  useEffect(() => {
    // FIXME: This does not work with two mermaid blocks
    // However, does work when building?
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);


  return children;
}
