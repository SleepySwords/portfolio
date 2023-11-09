export default function Navbar() {
  return (
    // <nav className="fixed flex items-center w-11/12 justify-between flex-wrap">
    <nav className="flex items-center w-full justify-between flex-wrap">
      <div className="w-full block flex-grow flex items-center w-auto">
        <div className="flex-grow">
          <a href="./" className="block font-bold text-white mt-4 inline-block mt-0">
            ¯\_(ツ)_/¯
          </a>
        </div>
        <div>
          <a href="./blog" className="text-white px-4 py-2 underline leading-none mt-4 mt-0 transition-colors hover:text-gray-400">blog</a>
          <a href="#" className="text-white px-4 py-2 underline leading-none mt-4 mt-0 transition-colors hover:text-gray-400">projects</a>
        </div>
      </div>
    </nav>
  )
}
