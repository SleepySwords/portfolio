import React from "react"; // or 'preact'
import { generateStaticParams } from "./[slug]/page";
import SideBar from "@/components/Sidebar";

export default async function Blog() {
  const staticParams = await generateStaticParams();
  return (
    <main className="flex" style={{ gridTemplateColumns: "1fr 4fr 1fr" }}>
      <div className="hidden shrink-0 grow-0 basis-64 sm:flex">
        <SideBar posts={staticParams} />
      </div>
    </main>
  );
}
