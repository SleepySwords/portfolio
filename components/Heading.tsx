import * as React from "react";

export function Heading({ id = "", level = 1, children, className }: any) {
  return React.createElement(
    `h${level}`,
    {
      id: children,
      className: [className].filter(Boolean).join(" "),
    },
    children,
  );
}
