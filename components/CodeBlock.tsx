"use client";

import "highlight.js/styles/github-dark.css";
import { HiClipboardCopy } from "react-icons/hi";

import * as React from "react";
import { useEffect } from "react";
import hljs from "highlight.js";

export function CodeBlock({
  children,
  "data-language": language,
}: {
  children: string;
  "data-language": string;
}) {
  const [copied, setCopied] = React.useState(0);
  const ref = React.useRef(null);

  useEffect(() => {
    console.log(ref.current);
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, []);

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

  const languageClass = language ? `language-${language}` : "";

  return (
    <div className="relative">
      <div
        className="absolute top-2 right-2 flex cursor-pointer rounded border border-neutral-700 bg-neutral-800 p-1.5 text-neutral-300 transition-colors hover:bg-neutral-900"
        onClick={handleClick}
      >
        {copied > 0 && <div className="pr-1 text-xs">Copied</div>}
        <HiClipboardCopy />
      </div>
      <pre className={`whitespace-pre-wrap ${languageClass}`}>
        <code
          ref={ref}
          className={`${languageClass} overflow-clip rounded border border-neutral-700 bg-black bg-neutral-800/30`}
          style={{ overflowWrap: "anywhere" }}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
