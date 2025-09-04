"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";
import Link from "next/link";
import styled from "@emotion/styled";
import { Tooltip } from "react-tooltip";
import { TOOLS, PROJECTS } from "@/app/projects";

const SkewedBackground = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dd2251;
  transform: skewX(0deg) scaleX(0.56) scaleY(0.4) translate(-22px, -70px)
    rotate(20deg);
  z-index: -1;
  position: absolute;
`;

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);

  function handleMouse(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    if (projectRef.current) {
      const cards = projectRef.current.getElementsByClassName("cards");
      for (let i = 0; i < cards.length; i++) {
        const card: HTMLElement = cards[i] as HTMLElement;
        const box = card.getBoundingClientRect();
        const middleX = (box.left + box.right) / 2;
        const middleY = (box.top + box.bottom) / 2;
        const radX = Math.atan((x - middleX) / 1000);
        const radY = Math.atan((middleY - y) / 1000);
        if (x > box.left && x < box.right && y > box.top && y < box.bottom) {
          card.style.transform = `perspective(1000px) rotateY(${radX}rad) rotateX(${radY}rad) scale(1.1)`;
        } else {
          card.style.transform = `perspective(1000px) rotateY(${radX}rad) rotateX(${radY}rad)`;
        }
      }
    }
  }

  //useEffect(() => {
  //  window.removeEventListener("mousemove", handleMouse);
  //  window.addEventListener("mousemove", handleMouse, { passive: true });
  //  return () => window.removeEventListener("mousemove", handleMouse);
  //}, []);

  useEffect(() => {
    const timeline = createTimeline({
      loop: true,
    });
    timeline
      .add(".icon", {
        scaleX: [1, 1.3],
        scaleY: [1, 0.7],
        easing: "easeInOutQuad",
        duration: 250,
      })
      .add(".icon", {
        translateY: [0, -6],
        scaleX: [1.3, 0.9],
        scaleY: [0.7, 1.1],
        easing: "easeInOutQuad",
        duration: 250,
      })
      .add(".icon", {
        translateY: [-6, 0],
        scaleX: [0.9, 1],
        scaleY: [1.1, 1],
        easing: "easeInOutQuad",
        duration: 250,
      });
  });

  function backgroundAndBorder() {
    return "hover:border-(--projectBorder) hover:bg-(--projectBackground)";
  }

  return (
    <main className="flex flex-col items-center p-8">
      <div className="place-items-start text-3xl font-bold text-(--secondary)">
        The fun stuff!
      </div>
      {/*<SkewedBackground />*/}
      {Object.entries(TOOLS).map((value) => {
        const [id, tool] = value;
        return (
          <Tooltip
            anchorSelect={`.${tool.id}`}
            place="top"
            offset={20}
            key={id}
            style={{ zIndex: 10, backgroundColor: "#333333", width: "24rem" }}
          >
            <div className="font-bold">{tool.name}</div>
            <div>{tool.description}</div>
          </Tooltip>
        );
      })}
      <div
        ref={projectRef}
        className="mt-10 grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left"
      >
        {PROJECTS.map((item) => (
          <div
            key={item.id}
            className="mt-4 h-28 overflow-hidden hover:overflow-visible"
          >
            <div
              className={`cards group rounded-lg border border-transparent px-5 py-4 transition-colors transition-transform hover:scale-110 ${backgroundAndBorder()}`}
            >
              <h2 className={`mt-0 mb-3.5 text-2xl font-semibold underline`}>
                <Link href={`projects/${item.id}`}>
                  {item.title}{" "}
                  <span className="inline-block group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </Link>
              </h2>
              <p className={`m-0 h-12 max-w-[30ch] text-sm opacity-50`}>
                {item.briefDescription}
              </p>
              <div className="font-semibold">Skills</div>
              <div className={`mt-2 flex`}>
                {item.tools.map((icon, i) => (
                  <Link key={i} className={`${icon.id} mr-2`} href={icon.link}>
                    <div
                      className="icon transition-none"
                      style={{ transformOrigin: "bottom center" }}
                    >
                      {icon.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
