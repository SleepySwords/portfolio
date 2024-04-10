"use client";

import { useContext, useEffect, useRef } from "react";
import anime from "animejs";
import { FaMarkdown, FaReact, FaRust } from "react-icons/fa";
import {
  SiHaskell,
  SiLlvm,
  SiLua,
  SiNeovim,
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

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
    const timeline = anime.timeline({
      loop: true,
      easing: "easeInOutQuad",
      targets: ".icon",
    });
    timeline
      .add({
        scaleX: [1, 1.3],
        scaleY: [1, 0.7],
        //easing: "easeInOutQuad",
        duration: 250,
      })
      .add({
        translateY: [0, -6],
        scaleX: [1.3, 0.9],
        scaleY: [0.7, 1.1],
        //easing: "easeInOutQuad",
        duration: 250,
      })
      .add({
        translateY: [-6, 0],
        scaleX: [0.9, 1],
        scaleY: [1.1, 1],
        //easing: "easeInOutQuad",
        duration: 250,
      });
  });

  const projects = [
    {
      id: 0,
      title: "DreamBerdC",
      description: "First compiler using LLVM, why not make it perfect?",
      link: "https://github.com/SleepySwords/DreamBerdc",
      icons: [<FaRust key="0" />, <SiLlvm key="1" />],
    },
    {
      id: 1,
      title: "Dotfiles",
      description: "My dotfiles that I use on my daily machine.",
      link: "https://github.com/SleepySwords/dotfiles",
      icons: [<SiLua key="0" />, <SiNeovim key="1" />],
    },
    {
      id: 2,
      title: "Do Todo",
      description: "Do your todos with this Rust TUI client!",
      link: "https://github.com/SleepySwords/do_todo",
      icons: [
        <FaRust key="0" />,
        <Image
          key="1"
          width={15}
          height={15}
          src="https://ratatui.rs/_astro/hero-dark.sdDaGsSQ_Z10Cldg.webp"
          alt="ratatui"
        />,
      ],
    },
    {
      id: 3,
      title: "Portfolio",
      description: "The website that you are currently looking at!",
      link: "https://github.com/SleepySwords/sleepyswords.github.io",
      //icons: [faReact],
      icons: [
        <FaReact key="0" />,
        <SiTailwindcss key="1" />,
        <FaMarkdown key="2" />,
      ],
    },
    {
      id: 4,
      title: "Advent of code",
      description:
        "Solutions to previous advent of code that I wrote (with some help)",
      link: "https://github.com/SleepySwords/advent_of_code",
      //icons: [faRust],
      icons: [<FaRust key="0" />, <SiHaskell key="1" />],
    },
  ];

  function backgroundAndBorder() {
    return "hover:border-[color:var(--projectBorder)] hover:bg-[color:var(--projectBackground)]";
  }

  return (
    <main className="flex flex-col items-center p-8">
      <div className="place-items-start text-3xl font-bold text-secondary">
        The fun stuff!
      </div>
      <div
        ref={projectRef}
        className="mt-10 grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left"
      >
        {projects.map((item) => (
          <div
            key={item.id}
            className="mt-4 h-28 overflow-hidden hover:z-0 hover:overflow-visible"
          >
            <div
              className={`cards group rounded-lg border border-transparent px-5 py-4 transition-colors transition-transform hover:scale-110 ${backgroundAndBorder()}`}
            >
              <h2 className={`mb-3.5 mt-0 text-2xl font-semibold underline`}>
                <Link href={item.link}>
                  {item.title}{" "}
                  <span className="inline-block group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </Link>
              </h2>
              <p className={`m-0 h-12 max-w-[30ch] text-sm opacity-50`}>
                {item.description}
              </p>
              <div className="font-semibold">Skills</div>
              <div className={`mt-2 flex`}>
                {item.icons.map((icon, i) => (
                  <div
                    className="icon mr-2 transition-none"
                    style={{ transformOrigin: "bottom center" }}
                    key={i}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
