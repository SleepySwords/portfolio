import * as React from "react";
import { MdErrorOutline } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const data = {
  warning: <IoWarningOutline className="text-xl text-yellow-500" />,
  note: <LuInfo className="text-xl text-neutral-400" />,
  caution: <MdErrorOutline className="text-xl text-red-500" />,
  check: <CiCircleCheck className="text-xl text-green-500" />,
};

export default function Callout({
  title,
  children,
  type,
}: {
  title: String;
  children: String;
  type: keyof typeof data;
}) {
  return (
    <div
      className="callout mb-4 mt-4 flex place-items-center
    rounded-sm border bg-gray-100 p-5 text-dark
    dark:border-neutral-700 dark:bg-neutral-800 dark:text-light"
    >
      {data[type]}
      <div className="ml-4">
        <span className="font-bold">{title}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}
