import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <main className="justify-top flex min-h-screen flex-col items-center p-8">
      <Navbar />
      <div className="flex w-full secondary-colour mt-10 place-items-start text-3xl font-bold">
        Projects
      </div>
      <div className="mt-15 grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <a
          href="https://github.com/SleepySwords/DreamBerdc"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold underline`}>
            DreamBerdC{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            First compiler using LLVM, why not make it perfect?
          </p>
        </a>

        <a
          href="https://github.com/SleepySwords/dotfiles"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold underline`}>
            Dotfiles{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            My dotfiles that I use on my daily machine.
          </p>
        </a>

        <a
          href="https://github.com/SleepySwords/do_todo"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold underline`}>
            Do Todo{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Do your todos with this Rust TUI client!
          </p>
        </a>

        <a
          href="https://github.com/SleepySwords/sleepyswords.github.io/tree/portfolio"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold underline`}>
            Portfolio{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The website that you are currently looking at!
          </p>
        </a>
      </div>
    </main>
  );
}
