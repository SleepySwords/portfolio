"use client";

import React, { useEffect, useRef, useState } from "react";
import TableOfContents from "./TableOfContents";
import mermaid from "mermaid";

export default function MarkdownContent({
  title,
  date,
  content,
  tableOfContents,
}: {
  title: String,
  date: Date,
  content: React.ReactNode,
  tableOfContents: any,
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

  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        let height = window.document.getElementsByTagName('nav')[0].getBoundingClientRect().bottom;
        let elements = ref.current.getElementsByTagName('h1');
        for (let i = 0; i < elements.length; i++) {
          let elem = elements[elements.length - i - 1];
          let box = elem.getBoundingClientRect();
          if (box.top - 50 < height) {
            console.log(elem.id)
            setCurrentElem(elem.id)
            return;
          }
        }
        setCurrentElem("")
      }
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll()
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentElem]);

  return (
    <>
      <div ref={ref} className="remove-all flex-grow">
        <div className="mb-2 text-3xl font-bold">
          {title}
        </div>
        <div className="mb-5 text-m text-gray-400">
          {date.toLocaleDateString()}
        </div>
        {content}
      </div>
      <div className="hidden shrink-0 grow-0 basis-64 lg:flex">
        <TableOfContents current={currentElem} tableOfContents={tableOfContents} />
      </div>
    </>
  )
}
