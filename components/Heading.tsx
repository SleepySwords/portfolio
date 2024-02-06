import * as React from "react";

export function Heading({ level = 1, children }: { level: number, children: React.ReactNode}) {
  return React.createElement(
    `h${level}`,
    {
      id: children,
      className: "scroll-mt-24",
    },
    children,
  );
}
