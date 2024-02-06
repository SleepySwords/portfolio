import Navbar from "@/components/navbar";

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "DreamBerdC",
      description: "First compiler using LLVM, why not make it perfect?",
      link: "https://github.com/SleepySwords/DreamBerdc",
    },
    {
      id: 1,
      title: "Dotfiles",
      description: "My dotfiles that I use on my daily machine.",
      link: "https://github.com/SleepySwords/dotfiles",
    },
    {
      id: 2,
      title: "Do Todo",
      description: "Do your todos with this Rust TUI client!",
      link: "https://github.com/SleepySwords/do_todo",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "The website that you are currently looking at!",
      link: "https://github.com/SleepySwords/sleepyswords.github.io",
    },
    {
      id: 4,
      title: "Advent of code",
      description:
        "Solutions to previous advent of code that I wrote (with some help)",
      link: "https://github.com/SleepySwords/advent_of_code",
    },
  ];

  return (
      <main className="p-8 flex flex-col items-center">
        <div className="secondary-colour place-items-start text-3xl font-bold">
          The fun stuff!
        </div>
        <div className="mt-10 grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          {projects.map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="group mt-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
            >
              <h2 className={`mb-3.5 mt-0 text-2xl font-semibold underline`}>
                {item.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </main>
  );
}
