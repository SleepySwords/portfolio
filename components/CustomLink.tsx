import Link, { LinkProps } from "next/link";
import { JSX } from "react";

export default function CustomTextLink(attrs: LinkProps & ({ children: React.ReactNode } | { name: string })) {
  if ('children' in attrs) {
    return (
      <Link {...attrs} className={"leading-none underline transition-colors hover:text-gray-400"}>
        {attrs.children}
      </Link>
    )
  } else {
    return (
      <Link {...attrs} className={"leading-none underline transition-colors hover:text-gray-400"}>
        {attrs.name}
      </Link>
    )
  }
}
