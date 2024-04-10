"use client";
import { Theme, ThemeContext } from "@/app/theme";
import { useContext, useEffect, useState } from "react";
import { MdNightlightRound, MdOutlineWbSunny } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import Link from "next/link";

function NavbarLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 leading-none underline transition-colors hover:text-gray-400"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [theme, setThemeIcon] = useState<Theme>(Theme.Auto);

  function onThemeClick() {
    const keys = Object.values(Theme);
    const newTheme = keys[(keys.indexOf(theme) + 1) % keys.length];
    setThemeIcon(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  useEffect(() => {
    const th = localStorage.getItem("theme");
    if (th == "dark") {
      setThemeIcon(Theme.Dark);
    } else if (th == "light") {
      setThemeIcon(Theme.Light);
    } else {
      setThemeIcon(Theme.Auto);
    }
  }, []);

  function navbarColour() {
    return "bg-[color:var(--background)]";
  }

  return (
    // <nav className="fixed flex items-center w-11/12 justify-between flex-wrap">
    <nav
      className={`sticky top-0 z-10 w-full ${navbarColour()} transition-colors`}
    >
      <div className="flex w-full flex-grow items-center justify-between p-8">
        <Link href="/" className="mt-0 inline-block font-bold">
          ¯\_(ツ)_/¯
        </Link>
        <div className="flex items-center">
          <NavbarLink href="/blog">blog</NavbarLink>
          <NavbarLink href="/projects">projects</NavbarLink>

          <div
            className="cursor-pointer select-none px-2 transition-colors hover:text-gray-400"
            onClick={onThemeClick}
          >
            {theme == Theme.Dark ? (
              <MdNightlightRound />
            ) : theme == Theme.Light ? (
              <MdOutlineWbSunny />
            ) : (
              <FaGears />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
