"use client"!;

import hljs from "highlight.js";
import { useEffect } from "react";
import "highlight.js/styles/github-dark.css";

import * as React from "react";

export function CodeBlock({
  children,
  "data-language": language,
}: {
  children: string;
  "data-language": string;
}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div>
      <pre className={`language-${language} whitespace-pre-wrap`}>
        <code
          className={`language-${language} hljs overflow-clip rounded border border-neutral-700 bg-black bg-neutral-800/30`}
          style={{ overflowWrap: "anywhere" }}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
