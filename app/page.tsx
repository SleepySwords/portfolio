"use client";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import anime from "animejs";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import './style.css'

export default function Home() {
  useEffect(() => {
    let timeline = anime.timeline({})
    timeline.add({
      targets: '.lines text',
      strokeDashoffset: ["250%", "0%"],
      easing: 'easeInOutCubic',
      duration: 1000,
      delay: function(_, i) { return i * 250 },
      direction: 'alternate',
    }).add({
      targets: '.lines text',
      fill: "#ebbab9",
      stroke: "#ebbab9",
      easing: 'easeInOutSine',
      duration: 500,
      direction: 'alternate',
    }, '-=500').add({
      targets: '.name a',
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 300,
    }).add({
      targets: '.logo a',
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 300,
    }, '-=300');
  }, []);
  return (
    <main className="flex flex-col flex-grow items-center justify-between">
      <div className="relative flex flex-grow place-items-center p-8">
        <div className="place-items-center text-center">
          <svg className="lines w-64 lg:w-[450px]">
            <g className="text-5xl font-bold lg:text-8xl" fill="none" stroke="#fff" strokeWidth="1" style={{ strokeDasharray: "250%", strokeDashoffset: "250%", translate: "50% 50%" }}>
              <text className="left-1" textAnchor="middle" >¯</text>
              <text className="left-2" textAnchor="middle" >\</text>
              <text className="left-3" textAnchor="middle" >_</text>
              <text className="left-4" textAnchor="middle" >(</text>
              <text className="" textAnchor="middle" >ツ</text>
              <text className="right-4" textAnchor="middle" >)</text>
              <text className="right-3" textAnchor="middle" >_</text>
              <text className="right-2" textAnchor="middle" >/</text>
              <text className="right-1" textAnchor="middle" >¯</text>
            </g>
          </svg>
          <div className="name mb-5 mt-20">
            <a className="secondary-colour text-xl font-bold opacity-0">SleepySwords</a>
          </div>
          <div className="logo mb-32 mt-10 grid grid-cols-2 place-items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-center">
            <Link
              href="https://github.com/sleepySwords/"
              className={`mb-3 opacity-0 text-4xl font-semibold text-gray-400 transition-colors hover:text-gray-100`}
            >
              <FaGithub />
            </Link>
            <Link
              href="mailto:admin@sleepyswords.dev"
              className={`mb-3 opacity-0 text-4xl font-semibold text-gray-400 transition-colors hover:text-gray-100`}
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
