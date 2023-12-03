"use client"!;

import hljs from "highlight.js";
import { useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import { HiClipboardCopy } from "react-icons/hi";

import * as React from "react";
import mermaid from "mermaid";

export function CodeBlock({
  children,
  "data-language": language,
}: {
  children: string;
  "data-language": string;
}) {
  useEffect(() => {
    // FIXME: This does not work with two mermaid blocks
    // However, does work when building?
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  if (language == "mermaid") {
    return <div>
      <pre className="mermaid whitespace-pre-wrap">{children}</pre>
    </div>
  }

  const handleClick = () => {
    navigator.clipboard.writeText(children);
  }
  return (
    <div>
      <pre className={`language-${language} whitespace-pre-wrap relative`}>
        <div className="absolute border rounded p-1.5 border-neutral-700 bg-neutral-800 right-1.5 top-1.5 text-neutral-300 cursor-pointer" onClick={handleClick}><HiClipboardCopy /></div>
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
