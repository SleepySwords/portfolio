"use client";

import {animate} from "animejs";
import React, { useEffect, useRef, useState } from "react";
import TableOfContents from "./TableOfContents";
import mermaid from "mermaid";

export default function MarkdownContent({
  title,
  date,
  content,
  tableOfContents,
}: {
  title: string;
  date: Date;
  content: React.ReactNode;
  tableOfContents: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentElem, setCurrentElem] = useState("");

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

  const duration = 600;

  useEffect(() => {
    animate("#content .main", {
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration,
      delay: function (_, i) {
        return i * 100;
      },
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        const height = window.document
          .getElementsByTagName("nav")[0]
          .getBoundingClientRect().bottom;
        const elements = ref.current.getElementsByTagName("h1");
        for (let i = 0; i < elements.length; i++) {
          const elem = elements[elements.length - i - 1];
          const box = elem.getBoundingClientRect();
          if (box.top - 50 < height) {
            setCurrentElem(elem.id);
            return;
          }
        }
        setCurrentElem("");
      }
    }

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentElem]);

  return (
    <>
      <div ref={ref} id="content" className="content remove-all grow">
        <div className="main mb-2 text-3xl font-bold opacity-0">{title}</div>
        <div className="main text-m mb-5 text-gray-400 opacity-0">
          {date.toLocaleDateString()}
        </div>
        <div className="main opacity-0">{content}</div>
      </div>
      <div
        id="tableOfContents"
        className="hidden shrink-0 grow-0 basis-64 lg:flex"
      >
        <TableOfContents
          current={currentElem}
          tableOfContents={tableOfContents}
        />
      </div>
    </>
  );
}
