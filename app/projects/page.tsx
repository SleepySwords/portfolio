"use client";

import { useEffect, useRef } from "react";

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);

  function handleMouse(event: MouseEvent) {
    let x = event.clientX;
    let y = event.clientY;
    if (projectRef.current) {
      const cards = projectRef.current.getElementsByClassName("cards");
      for (let i = 0; i < cards.length; i++) {
        let card: HTMLElement = cards[i] as HTMLElement;
        let box = card.getBoundingClientRect();
        let middleX = (box.left + box.right) / 2;
        let middleY = (box.top + box.bottom) / 2;
        let radX = Math.atan((x - middleX) / 1000);
        let radY = Math.atan((middleY - y) / 1000);
        if (x > box.left && x < box.right && y > box.top && y < box.bottom) {
          card.style.transform = `perspective(1000px) rotateY(${radX}rad) rotateX(${radY}rad) scale(1.1)`;
        } else {
          card.style.transform = `perspective(1000px) rotateY(${radX}rad) rotateX(${radY}rad)`;
        }
      }
    }
  }

  useEffect(() => {
    window.removeEventListener("mousemove", handleMouse);
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const projects = [
    {
      id: 0,
      title: "DreamBerdC",
      description: "First compiler using LLVM, why not make it perfect?",
      link: "https://github.com/SleepySwords/DreamBerdc",
    },
    {
      id: 1,
      title: "Dotfiles",
      description: "My dotfiles that I use on my daily machine.",
      link: "https://github.com/SleepySwords/dotfiles",
    },
    {
      id: 2,
      title: "Do Todo",
      description: "Do your todos with this Rust TUI client!",
      link: "https://github.com/SleepySwords/do_todo",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "The website that you are currently looking at!",
      link: "https://github.com/SleepySwords/sleepyswords.github.io",
    },
    {
      id: 4,
      title: "Advent of code",
      description:
        "Solutions to previous advent of code that I wrote (with some help)",
      link: "https://github.com/SleepySwords/advent_of_code",
    },
  ];

  return (
    <main className="flex flex-col items-center p-8">
      <div className="secondary-colour place-items-start text-3xl font-bold">
        The fun stuff!
      </div>
      <div
        ref={projectRef}
        className="mt-10 grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left"
      >
        {projects.map((item) => (
          <a
            href={item.link}
            key={item.id}
            className="cards group mt-4 rounded-lg border border-neutral-700 border-transparent bg-neutral-800/30 px-5 py-4 transition-colors"
          >
            <h2 className={`mb-3.5 mt-0 text-2xl font-semibold underline`}>
              {item.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
