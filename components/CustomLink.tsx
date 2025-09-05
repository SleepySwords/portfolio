import Link, { LinkProps } from "next/link";

export default function CustomTextLink(
  attrs: LinkProps & ({ children: React.ReactNode } | { name: string }),
) {
  if ("children" in attrs) {
    return (
      <Link
        {...attrs}
        className={
          "leading-none underline transition-colors hover:text-gray-400 break-all"
        }
      >
        {attrs.children}
      </Link>
    );
  } else {
    return (
      <Link
        {...attrs}
        className={
          "leading-none underline transition-colors hover:text-gray-400 break-all"
        }
      >
        {attrs.name}
      </Link>
    );
  }
}
