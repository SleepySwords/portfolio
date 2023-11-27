import React from "react"; // or 'preact'
import { generateStaticParams } from "./[slug]/page";
import SideBar from "@/components/Sidebar";

export default async function Blog() {
  const staticParams = await generateStaticParams();
  return (
    <div className="relative flex w-full flex-grow">
      <div className="w-full">
        <SideBar posts={staticParams} />
      </div>
    </div>
  );
}
