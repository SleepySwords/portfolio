import { JSX } from "react";
import { FaMarkdown, FaReact, FaRust } from "react-icons/fa";
import {
  SiHaskell,
  SiLlvm,
  SiLua,
  SiNeovim,
  SiTailwindcss,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import CustomTextLink from "@/components/CustomLink";

export type Tool = {
  id: string;
  name: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

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
};

export type Project = {
  id: number,
  title: string,
  briefDescription: string,
  description?: JSX.Element,
  link: string,
  tools: Tool[]
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "DreamBerdC",
    briefDescription: "First compiler using LLVM, why not make it perfect?",
    description: <>
      Tried to implement a basic version of the meme language <Link href="https://github.com/TodePond/GulfOfMexico">Dreamberd</Link> to learn more about how compilation occurs.
      This was written in the Rust programming language.

      <h3>Experiences</h3>
      <ul className="list-disc list-inside">
        <li>Learnt how to implement a lexer and a parser in Rust to form the abstract syntax tree using <CustomTextLink name={"this"} href="https://craftinginterpreters.com/introduction.html" /> as a reference.</li>
        <li>Learnt more in depth about how basic control flows, such as if, for and while loops are constructed.</li>
        <li>Learnt how to use the library <CustomTextLink href="https://github.com/TheDan64/inkwell" name={"inkwell"} /> and LLVM to be able to generate asm code from the abstract syntax tree.</li>
      </ul>

      <h3>Todos</h3>
      <ul className="list-disc list-inside">
        <li>Implement a way to combine basic data types into more complex data types.</li>
        <li>Learn more about programming language theory.</li>
        <li>Try to implement my own codegen to gain further experience in how the asm is actually created, for example: how registers are selected to do operations.</li>
      </ul>
    </>,
    link: "https://github.com/SleepySwords/DreamBerdc",
    tools: [TOOLS.rust, TOOLS.llvm],
  },
  {
    id: 1,
    title: "Dotfiles",
    briefDescription: "My dotfiles that I use on my daily machine.",
    link: "https://github.com/SleepySwords/dotfiles",
    tools: [TOOLS.lua, TOOLS.neovim],
  },
  {
    id: 2,
    title: "Do Todo",
    briefDescription: "Do your todos with this Rust TUI client!",
    link: "https://github.com/SleepySwords/do_todo",
    tools: [TOOLS.rust, TOOLS.ratatui],
  },
  {
    id: 3,
    title: "Portfolio",
    briefDescription: "The website that you are currently looking at!",
    link: "https://github.com/SleepySwords/portfolio",
    tools: [TOOLS.react, TOOLS.tailwind, TOOLS.markdoc],
  },
  {
    id: 4,
    title: "Advent of code",
    briefDescription:
      "Solutions to previous advent of code that I wrote (with some help)",
    link: "https://github.com/SleepySwords/advent_of_code",
    tools: [TOOLS.rust, TOOLS.haskell],
  },
];
