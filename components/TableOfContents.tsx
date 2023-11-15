"use client";

export default function TableOfContents({ tableOfContents }: any) {
  const items: any[] = tableOfContents.filter(
    (item: any) => item.level === 1 || item.level === 2 || item.level === 3,
  );

  return (
    <div className="ml-10 space-y-4">
      <div className="sticky top-36">
        <div className="mb-5 text-2xl font-semibold">Table of contents</div>
        <ul className="list-inside space-y-2 underline">
          {items.map((item) => {
            const href = `#${item.title}`;
            return (
              <li
                key={item.title}
                className={[
                  item.level === 2
                    ? "pl-4"
                    : item.level === 3
                      ? "pl-10"
                      : undefined,
                ].join(" ")}
              >
                <a
                  href={href}
                  className="text-white underline transition-colors hover:text-gray-400"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
