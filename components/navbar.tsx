export default function Navbar() {
  return (
    // <nav className="fixed flex items-center w-11/12 justify-between flex-wrap">
    <nav className="background-colour sticky top-0 z-10 w-full">
      <div className="block flex w-auto w-full flex-grow items-center p-8">
        <div className="flex-grow">
          <a href="/" className="mt-0 block inline-block font-bold">
            ¯\_(ツ)_/¯
          </a>
        </div>
        <div>
          <a
            href="/blog"
            className="px-4 py-2 leading-none underline transition-colors hover:text-gray-400"
          >
            blog
          </a>
          <a
            href="/projects"
            className="px-4 py-2 leading-none underline transition-colors hover:text-gray-400"
          >
            projects
          </a>
        </div>
      </div>
    </nav>
  );
}
