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
    return <pre className="mermaid whitespace-pre-wrap">{children}</pre>;
  }

  const handleClick = () => {
    navigator.clipboard.writeText(children);
    setCopied((n) => n + 1);
    setTimeout(() => {
      setCopied((n) => n - 1);
    }, 1000);
  };

  return (
    <div className="relative">
      <div
        className="{}hover:bg-neutral-900 absolute right-2 top-2 flex cursor-pointer rounded border border-neutral-700 bg-neutral-800 p-1.5 text-neutral-300 transition-colors"
        onClick={handleClick}
      >
        {copied > 0 && <div className="pr-1 text-xs">Copied</div>}
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
