"use client";

import { JSX, useEffect, useRef } from "react";
import {createTimeline} from "animejs";
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
import styled from "@emotion/styled";
import { Tooltip } from "react-tooltip";

const SkewedBackground = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dd2251;
  transform: skewX(0deg) scaleX(0.56) scaleY(0.4) translate(-22px, -70px)
    rotate(20deg);
  z-index: -1;
  position: absolute;
`;

interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

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

  const tools: { [key: string]: Tool } = {
    rust: {
      id: "rust",
      icon: <FaRust />,
      name: "Rust",
      description:
        "A nice to use programming language with emphesis on ownership and memory safety",
      link: "https://www.rust-lang.org/",
    },
    llvm: {
      id: "llvm",
      icon: <SiLlvm />,
      name: "LLVM",
      description:
        "A compiler framework that helps to build languages for many different platforms.",
      link: "https://llvm.org/",
    },
    lua: {
      id: "lua",
      icon: <SiLua />,
      name: "Lua",
      description:
        "A lightweight language focusing on scripting and configuration.",
      link: "https://www.lua.org/",
    },
    neovim: {
      id: "neovim",
      icon: <SiNeovim />,
      name: "Neovim",
      description:
        "An editor that has a primary focus on configuration and customisability.",
      link: "https://neovim.io/",
    },
    ratatui: {
      id: "ratatui",
      icon: (
        <Image
          key="1"
          width={15}
          height={15}
          src="https://ratatui.rs/_astro/hero-dark.sdDaGsSQ_Z10Cldg.webp"
          alt="ratatui"
        />
      ),
      name: "Ratatui",
      description: "A tui framework built in Rust!",
      link: "https://ratatui.rs/",
    },
    haskell: {
      id: "haskell",
      icon: <SiHaskell />,
      name: "Haskell",
      description: "A purely functional programming language",
      link: "https://www.haskell.org/",
    },
    react: {
      id: "react",
      icon: <FaReact />,
      name: "React",
      description: "A framework for building websites through components",
      link: "https://react.dev/",
    },
    tailwind: {
      id: "tailwind",
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      description: "A framework aimed to make styling a breeze",
      link: "https://tailwindcss.com/",
    },
    markdoc: {
      id: "markdoc",
      icon: <FaMarkdown />,
      name: "Markdoc",
      description: "Convert markdoc files into a react tree for pretty blogs.",
      link: "https://markdoc.dev/",
    },
  };

  const projects = [
    {
      id: 0,
      title: "DreamBerdC",
      description: "First compiler using LLVM, why not make it perfect?",
      link: "https://github.com/SleepySwords/DreamBerdc",
      icons: [tools.rust, tools.llvm],
    },
    {
      id: 1,
      title: "Dotfiles",
      description: "My dotfiles that I use on my daily machine.",
      link: "https://github.com/SleepySwords/dotfiles",
      icons: [tools.lua, tools.neovim],
    },
    {
      id: 2,
      title: "Do Todo",
      description: "Do your todos with this Rust TUI client!",
      link: "https://github.com/SleepySwords/do_todo",
      icons: [tools.rust, tools.ratatui],
    },
    {
      id: 3,
      title: "Portfolio",
      description: "The website that you are currently looking at!",
      link: "https://github.com/SleepySwords/sleepyswords.github.io",
      icons: [tools.react, tools.tailwind, tools.markdoc],
    },
    {
      id: 4,
      title: "Advent of code",
      description:
        "Solutions to previous advent of code that I wrote (with some help)",
      link: "https://github.com/SleepySwords/advent_of_code",
      icons: [tools.rust, tools.haskell],
    },
  ];

  function backgroundAndBorder() {
    return "hover:border-(--projectBorder) hover:bg-(--projectBackground)";
  }

  return (
    <main className="flex flex-col items-center p-8">
      <div className="place-items-start text-3xl font-bold text-(--secondary)">
        The fun stuff!
      </div>
      {/*<SkewedBackground />*/}
      {Object.entries(tools).map((value) => {
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
        {projects.map((item) => (
          <div
            key={item.id}
            className="mt-4 h-28 overflow-hidden hover:overflow-visible"
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
