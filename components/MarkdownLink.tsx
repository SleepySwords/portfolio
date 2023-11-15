import * as React from "react";

export function MarkdownLink({ href, children, className }: any) {
  return React.createElement(
    `a`,
    {
      href: href,
      className: [`underline transition-colors hover:text-gray-400`, className]
        .filter(Boolean)
        .join(" "),
    },
    children,
  );
}
