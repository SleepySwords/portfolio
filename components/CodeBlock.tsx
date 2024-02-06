"use client"!;

import hljs from "highlight.js";
import { useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import { HiClipboardCopy } from "react-icons/hi";

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

  let [copied, setCopied] = React.useState(0);

  if (language === "mermaid") {
    return <pre className="mermaid whitespace-pre-wrap">
      {children}
    </pre>
  }

  const handleClick = () => {
    navigator.clipboard.writeText(children);
    setCopied(n => n + 1);
    setTimeout(() => {
      setCopied(n => n - 1);
    }, 1000);
  }

  return (
    <div className="relative">
      <div className="flex absolute border rounded p-1.5 border-neutral-700 {}hover:bg-neutral-900 bg-neutral-800 right-2 top-2 text-neutral-300 cursor-pointer transition-colors" onClick={handleClick}>
        {copied > 0 && <div className="text-xs pr-1">Copied</div>}
        <HiClipboardCopy />
      </div>
      <pre className={`whitespace-pre-wrap language-${language}`}>
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
