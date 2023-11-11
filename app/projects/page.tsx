import Navbar from "@/components/navbar";

export default function Projects() {

  const projects = [
    {
      title: "DreamBerdC",
      description: "First compiler using LLVM, why not make it perfect?",
      link: "https://github.com/SleepySwords/DreamBerdc"
    },
    {
      title: "Dotfiles",
      description: "My dotfiles that I use on my daily machine.",
      link: "https://github.com/SleepySwords/dotfiles"
    },
    {
      title: "Do Todo",
      description: "Do your todos with this Rust TUI client!",
      link: "https://github.com/SleepySwords/do_todo"
    },
    {
      title: "Portfolio",
      description: "The website that you are currently looking at!",
      link: "https://github.com/SleepySwords/sleepyswords.github.io"
    },
    {
      title: "Advent of code",
      description: "Solutions to previous advent of code that I wrote (with some help)",
      link: "https://github.com/SleepySwords/advent_of_code"
    },
  ];

  return (
    <main className="justify-top flex min-h-screen flex-col items-center p-8">
      <Navbar />
      <div className="secondary-colour mt-20 place-items-start text-3xl font-bold">
        Projects
      </div>
      <div className="mt-10 grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {projects.map((item) => {
          return (
            <a
              href={item.link}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold underline`}>
                {item.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {item.description}
              </p>
            </a>
          )
        })}
      </div>
    </main>
  );
}
