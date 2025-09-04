"use client";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { createTimeline } from "animejs";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import "./style.css";

export default function Home() {
  useEffect(() => {
    const timeline = createTimeline({});
    timeline
      .add(".lines text", {
        strokeDashoffset: ["250%", "0%"],
        easing: "easeInOutCubic",
        duration: 1300,
        delay: function (_, i) {
          return i * 200;
        },
        direction: "alternate",
      })
      .add(
        ".lines text",
        {
          fillOpacity: [0, 1],
          stroke: "#ebbab9",
          easing: "easeInOutSine",
          duration: 400,
          direction: "alternate",
        },
        "-=1000",
      );
    //.add(
    //  {
    //    targets: ".name a",
    //    opacity: [0, 1],
    //    easing: "easeInOutSine",
    //    duration: 300,
    //  },
    //  "-=200",
    //)
    //.add(
    //  {
    //    targets: ".logo a",
    //    opacity: [0, 1],
    //    easing: "easeInOutSine",
    //    duration: 300,
    //  },
    //  "-=200",
    //);
  }, []);
  function strokeColour() {
    return "stroke-(--foreground)";
  }
  return (
    <main className="flex grow flex-col items-center justify-between">
      <div className="relative flex grow place-items-center p-8">
        <div className="place-items-center text-center">
          <svg className="lines w-64 lg:w-[450px]">
            <g
              className={`fill-(--primary) text-5xl font-bold lg:text-8xl ${strokeColour()}`}
              fillOpacity="0"
              strokeWidth="1"
              style={{
                strokeDasharray: "250%",
                strokeDashoffset: "250%",
                translate: "50% 50%",
              }}
            >
              <text className="logo-left-1" textAnchor="middle">
                ¯
              </text>
              <text className="logo-left-2" textAnchor="middle">
                \
              </text>
              <text className="logo-left-3" textAnchor="middle">
                _
              </text>
              <text className="logo-left-4" textAnchor="middle">
                (
              </text>
              <text className="" textAnchor="middle">
                ツ
              </text>
              <text className="logo-right-4" textAnchor="middle">
                )
              </text>
              <text className="logo-right-3" textAnchor="middle">
                _
              </text>
              <text className="logo-right-2" textAnchor="middle">
                /
              </text>
              <text className="logo-right-1" textAnchor="middle">
                ¯
              </text>
            </g>
          </svg>
          <div className="name mt-20 mb-5">
            <a className="text-xl font-bold text-(--secondary) opacity-100">
              SleepySwords
            </a>
          </div>
          <div className="logo mt-10 mb-32 grid grid-cols-2 place-items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-center">
            <Link
              href="https://github.com/sleepySwords/"
              className={`mb-3 text-4xl font-semibold text-gray-400 opacity-100 transition-colors hover:text-gray-100`}
            >
              <FaGithub />
            </Link>
            <Link
              href="mailto:me@sleepyswords.dev"
              className={`mb-3 text-4xl font-semibold text-gray-400 opacity-100 transition-colors hover:text-gray-100`}
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
