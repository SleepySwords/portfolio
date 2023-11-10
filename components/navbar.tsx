export default function Navbar() {
  return (
    // <nav className="fixed flex items-center w-11/12 justify-between flex-wrap">
    <nav className="flex w-full flex-wrap items-center justify-between">
      <div className="block flex w-auto w-full flex-grow items-center">
        <div className="flex-grow">
          <a
            href="./"
            className="mt-0 mt-4 block inline-block font-bold text-white"
          >
            ¯\_(ツ)_/¯
          </a>
        </div>
        <div>
          <a
            href="./blog"
            className="mt-0 mt-4 px-4 py-2 leading-none text-white underline transition-colors hover:text-gray-400"
          >
            blog
          </a>
          <a
            href="./projects"
            className="mt-0 mt-4 px-4 py-2 leading-none text-white underline transition-colors hover:text-gray-400"
          >
            projects
          </a>
        </div>
      </div>
    </nav>
  );
}
