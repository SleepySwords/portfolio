import { JSX } from "react";
import { FaMarkdown, FaReact, FaRust } from "react-icons/fa";
import {
  SiHaskell,
  SiLlvm,
  SiLua,
  SiNeovim,
  SiSpigotmc,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import CustomTextLink from "@/components/CustomLink";
import { FaGit, FaJava } from "react-icons/fa6";

export type Tool = {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: JSX.Element;
};

export const TOOLS: { [key: string]: Tool } = {
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
        src="https://media.githubusercontent.com/media/ratatui/ratatui-website/refs/heads/main/src/assets/hero-dark.png"
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
  java: {
    id: "java",
    icon: <FaJava />,
    name: "Java",
    description: "An object oriented language that runs on the JVM",
    link: "https://www.java.com/en/",
  },
  spigot: {
    id: "spigot",
    icon: <SiSpigotmc />,
    name: "Spigot",
    description: "A minecraft server that added plugin capabilities.",
    link: "https://www.spigotmc.org/",
  },
  kotlin: {
    id: "kotlin",
    icon: <TbBrandKotlin />,
    name: "Kotlin",
    description: "An expressive language that runs on the JVM.",
    link: "https://kotlinlang.org/",
  },
  git: {
    id: "git",
    icon: <FaGit />,
    name: "git",
    description: "A distributed VCS that allows for very cheap branches.",
    link: "https://git-scm.com/",
  },
};

export type Project = {
  id: number;
  title: string;
  briefDescription: string;
  description?: JSX.Element;
  link: string | string[];
  tools: Tool[];
};

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "DreamBerdC",
    briefDescription: "First compiler using LLVM, why not make it perfect?",
    description: (
      <>
        Tried to implement a basic version of the meme language{" "}
        <Link href="https://github.com/TodePond/GulfOfMexico">Dreamberd</Link>{" "}
        to learn more about how compilation occurs. This was written in the Rust
        programming language.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learnt how to implement a lexer and a parser in Rust to form the
            abstract syntax tree using{" "}
            <CustomTextLink
              name={"this"}
              href="https://craftinginterpreters.com/introduction.html"
            />{" "}
            as a reference.
          </li>
          <li>
            Learnt more in depth about how basic control flows, such as if, for
            and while loops are constructed.
          </li>
          <li>
            Learnt how to use the library{" "}
            <CustomTextLink
              href="https://github.com/TheDan64/inkwell"
              name={"inkwell"}
            />{" "}
            and LLVM to be able to generate asm code from the abstract syntax
            tree.
          </li>
        </ul>
        <h3>Todos</h3>
        <ul className="list-inside list-disc">
          <li>
            Implement a way to combine basic data types into more complex data
            types.
          </li>
          <li>Learn more about programming language theory.</li>
          <li>
            Try to implement my own codegen to gain further experience in how
            the asm is actually created, for example: how registers are selected
            to do operations.
          </li>
        </ul>
      </>
    ),
    link: "https://github.com/SleepySwords/DreamBerdc",
    tools: [TOOLS.rust, TOOLS.llvm],
  },
  {
    id: 1,
    title: "Do Todo",
    briefDescription: "Do your todos with this Rust TUI client!",
    link: "https://github.com/SleepySwords/do_todo",
    description: (
      <>
        Implemented a TUI todo application that uses vim like keybinds.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learnt more about how Rust works, in particular with its borrowing
            system.
          </li>
          <li>
            Gained experience with reading existing documentation and be able to
            implement the client, in this case with the Todoist API.
          </li>
          <li>
            Learnt more about how serialisation and deserialising works, since
            there is a json file storage method.
          </li>
          <li>
            Understand more systems concepts, such as concurrency, threads and
            networking.
          </li>
          <li>
            Learnt about how Rust implements concurrency through its async
            features.
          </li>
        </ul>
        <h3>Todos</h3>
        <ul className="list-inside list-disc">
          <li>Implement more Todoist like features</li>
          <li>Increase the test coverage of the app</li>
        </ul>
      </>
    ),
    tools: [TOOLS.rust, TOOLS.ratatui],
  },
  {
    id: 2,
    title: "Models of compute",
    briefDescription:
      "Run Lambdas calculus, Turing machines and Finite State automotas!",
    link: "https://github.com/SleepySwords/moc",
    description: (
      <>
        Created an interperter for different models of computation, each model
        of computation has a different format that can be specified.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learnt more about these models, how they are implemented and used.
          </li>
          <li>
            Gained experienced in Haskell, the language chosen for
            implemntation, and more on how functional programming works.
          </li>
          <li>
            More experience in reading and interperting formats using the
            Monadparsec library.
          </li>
          <li>
            Learnt how lambda calculus in particular could be used to do
            computations.
          </li>
        </ul>
        <h3>Todos</h3>
        <ul className="list-inside list-disc">
          <li>
            Implement more models of computation, for example, using gates
          </li>
          <li>Implement a regex library as NFAs and DFAs are implemented</li>
        </ul>
      </>
    ),
    tools: [TOOLS.haskell],
  },
  {
    id: 3,
    title: "Pioneer",
    briefDescription:
      "Helped make an attempt at writing a MC server implemntation from scratch.",
    link: "https://git.mcdevs.us/Pioneer/Pioneer/-/tree/experimental-swords",
    description: (
      <>
        Tried to implement the minecarft protocol using wiki.vg, now closed,{" "}
        <CustomTextLink
          href={`https://minecraft.wiki/w/Minecraft_Wiki:Protocol_documentation`}
        >
          archive
        </CustomTextLink>
        , we were able to get chunk loading and player login but nothing more.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Gained more experience in Kotlin and its various language features.
          </li>
          <li>
            Gained more of an understanding on how networking works for games.
          </li>
          <li>
            Learnt more about concurrency and how Kotlin utilises coroutines.
          </li>
          <li>Experienced a bit about what entity component systems are.</li>
        </ul>
        <h3>Todos</h3>
        <ul className="list-inside list-disc">
          <li>
            Try to reimplement this using a dedicated thread for the event loop,
            and send events to that thread. Rather than letting any thread
            modify data.
          </li>
          <li>Try to get multiple players working.</li>
        </ul>
      </>
    ),
    tools: [TOOLS.kotlin],
  },
  {
    id: 4,
    title: "change-function.nvim",
    briefDescription:
      "A small neovim plugin to make editing function signatures a breeze.",
    link: "https://github.com/SleepySwords/change-function.nvim",
    description: (
      <>
        This plugin allows a person to add, remove or move parameters in a
        function signature that will be updated to all its references if
        possible.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learnt more about how LSP and Treesitter works, particularly how you
            can specify queries.
          </li>
          <li>
            Experienced being able to interface with neovims APIs to be able to
            create custome functionality.
          </li>
          <li>Learnt more about how to use Lua for scripting capabilities</li>
          <li>
            Learnt how to use popular UI libraries that are within the neovim
            ecosystem.
          </li>
        </ul>
      </>
    ),
    tools: [TOOLS.lua, TOOLS.neovim],
  },
  {
    id: 5,
    title: "Advent of code",
    briefDescription:
      "Solutions to previous advent of code that I wrote (with some help)",
    link: "https://github.com/SleepySwords/advent_of_code",
    description: (
      <>
        Advent of code is a yearly challenge, where from the 1st to the 25th
        there is a new programming challenge that participants try to solve as
        fast as possible.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learnt more about programming techniques, such as dynamic
            programming.
          </li>
          <li>Learnt about data structures.</li>
          <li>
            Experienced different languages to be able to implement solutions.
          </li>
        </ul>
      </>
    ),
    tools: [TOOLS.rust, TOOLS.haskell, TOOLS.kotlin],
  },
  {
    id: 6,
    title: "Minecraft Plugins",
    briefDescription:
      "These were some (now archived) plugins & tools for the Spigot server.",
    link: [
      "https://github.com/SleepySwords/MinecraftGameEngine",
      "https://github.com/SleepySwords/PrisonExtras",
    ],
    description: (
      <>
        Creating small minecraft plugins for the Spigot server. These were the
        ones that were made public.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>This was my main introduction to Java.</li>
          <li>How to structure code and using the Bukkit library.</li>
          <li>
            Learnt how to use coding conventions and how to better structure
            code later on.
          </li>
        </ul>
      </>
    ),
    tools: [TOOLS.java, TOOLS.spigot],
  },
  {
    id: 7,
    title: "Dotfiles",
    briefDescription: "My dotfiles that I use on my daily machine.",
    link: "https://github.com/SleepySwords/dotfiles",
    description: (
      <>
        Dotfiles that I currently use, this mainly consists of my neovim config
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learnt how to use Lua to be able to create custom functionality.
          </li>
          <li>Learnt how to utilise Git (across all projects)</li>
        </ul>
      </>
    ),
    tools: [TOOLS.lua, TOOLS.neovim, TOOLS.git],
  },
  {
    id: 8,
    title: "Portfolio",
    briefDescription: "The website that you are currently looking at!",
    link: "https://github.com/SleepySwords/portfolio",
    description: (
      <>
        This website uses NextJS as its stack of choice. It compiles to a static
        website using the export output. This is then deployed onto Cloudflare
        Pages.
        <h3>Experiences</h3>
        <ul className="list-inside list-disc">
          <li>
            Learn more about React and how it utilises componenets to create
            applications.
          </li>
          <li>Learn about how state works in react with its use of hooks.</li>
          <li>Using tailwind CSS to be able to style this website.</li>
          <li>Use markdoc to be able to render markdown files for the blog.</li>
        </ul>
      </>
    ),
    tools: [TOOLS.react, TOOLS.tailwind, TOOLS.markdoc],
  },
];
