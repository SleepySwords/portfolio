import * as React from "react";

export default function Callout({ title, children }) {
  return (
    <div className="callout">
      <div className="content">
        <div className="copy">
          <span className="title">{title}</span>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}
