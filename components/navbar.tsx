export default function Navbar() {
  return (
    // <nav className="fixed flex items-center w-11/12 justify-between flex-wrap">
    <nav className="w-full sticky z-10 top-0 background-colour">
      <div className="block p-8 flex w-auto w-full flex-grow items-center">
        <div className="flex-grow">
          <a href="/" className="mt-0 block inline-block font-bold text-white">
            ¯\_(ツ)_/¯
          </a>
        </div>
        <div>
          <a
            href="/blog"
            className="px-4 py-2 leading-none text-white underline transition-colors hover:text-gray-400"
          >
            blog
          </a>
          <a
            href="/projects"
            className="px-4 py-2 leading-none text-white underline transition-colors hover:text-gray-400"
          >
            projects
          </a>
        </div>
      </div>
    </nav>
  );
}
