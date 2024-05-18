"use client";

import "../globals.css";
import styled from "@emotion/styled";

const SkewedBackground = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dd2251;
  transform: skewX(15deg) scaleX(1.6) scaleY(0.4) translate(22px, -70px)
    rotate(352deg);
  z-index: -1;
  position: absolute;
`;

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="justify-top flex flex-col items-center p-8">
      <div className="place-items-start text-3xl font-bold text-secondary">
        My ramblings
      </div>
      {/*<SkewedBackground />*/}
      <div className="mt-10 grid w-10/12 text-left">{children}</div>
    </main>
  );
}
