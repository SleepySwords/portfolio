"use client";

export default function TableOfContents({ tableOfContents, current }: any) {
  const items: any[] = tableOfContents.filter(
    (item: any) => item.level === 1 || item.level === 2 || item.level === 3,
  );
  console.log("hi: " + current)

  return (
    <div className="ml-10 space-y-4">
      <div className="sticky top-36">
        <div className="mb-5 text-2xl font-semibold">Table of contents</div>
        <ul className="list-inside space-y-2 underline">
          {items.map((item) => {
            const href = `#${item.title}`;
            const textColour = current == item.title ? "opacity-1" : "opacity-0";
            const level = item.level === 2
              ? "pl-4"
              : item.level === 3
                ? "pl-10"
                : undefined;
            return (
              <li
                key={item.title}
                className={level}
              >
                <div className="flex">
                  <div className={"mr-3 my-[0.050rem] p-1 secondary-bg-colour rounded transition-opacity " + textColour}></div>
                  <a
                    href={href}
                    className="text-white underline transition-colors hover:text-gray-400"
                  >
                    {item.title}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
