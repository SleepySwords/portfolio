"use client";
import Navbar from "@/components/navbar";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

import anime from "animejs";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";

export default function Home() {
  useEffect(() => {
    // function makeid(length) {
    //   let result = '';
    //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //   const charactersLength = characters.length;
    //   let counter = 0;
    //   while (counter < length) {
    //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     counter += 1;
    //   }
    //   return result;
    // }
    // let progress = {
    //   progress: 0,
    //   loop: true,
    // }
    // anime({
    //   targets: progress,
    //   progress: 100,
    //   // direction: 'alternate',
    //   loop: true,
    //   easing: 'linear',
    //   duration: 6000,
    //   update: function() {
    //     let status = document.querySelector("#status");
    //     if (Math.round(progress.progress) == 25) {
    //       status.innerHTML = "Having fun"
    //     } else if (Math.round(progress.progress) == 75) {
    //       status.innerHTML = "Living life"
    //     } else if (progress.progress > 50 && progress.progress < 75 || progress.progress < 25) {
    //       status.innerHTML = makeid(Math.floor(Math.random() * 5) + 5)
    //     }
    //   }
    // });
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-col flex-grow items-center justify-between">
        <div className="relative flex flex-grow place-items-center p-8">
          <div className="place-items-center text-center">
            <h1 className="primary-colour title mb-20 text-5xl font-bold lg:text-8xl">
              ¯\_(ツ)_/¯
            </h1>
            <div className="mb-5 mt-20">
              <a className="secondary-colour text-xl font-bold">SleepySwords</a>
            </div>
            {/*<a id="status" className="text-l font-bold text-gray-400">
            Developer  |  Student
          </a>*/}
            <div className="mb-32 mt-10 grid grid-cols-2 place-items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-center">
              <Link
                href="https://github.com/sleepySwords/"
                className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors hover:text-gray-100`}
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:admin@sleepyswords.dev"
                className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors hover:text-gray-100`}
              >
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
