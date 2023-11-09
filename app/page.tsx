import Navbar from '@/components/navbar'
import { FaGithub } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-zinc-900">
      <Navbar />

      <div className="flex-grow relative flex place-items-center grid">
        <div className="place-items-center text-center">
          <div>
            <h1 className="text-5xl lg:text-8xl font-bold mb-20" style={{ color: "#EBBAB9" }}>¯\_(ツ)_/¯</h1>
          </div>
          <a className="text-xl font-bold text-pink-300 mt-25" style={{ color: "#FF9997" }}>
            SleepySwords
          </a>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-center place-items-center mt-10">
            <Link href="https://github.com/sleepySwords/" className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors hover:text-gray-100`}>
              <FaGithub />
            </Link>
            <h2 className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors  hover:text-gray-100`}>
              <BsDiscord />
            </h2>
            <h2 className={`mb-3 text-4xl font-semibold text-gray-400 transition-colors  hover:text-gray-100`}>
              <BsTwitter />
            </h2>
          </div>
        </div>
      </div>

    </main>
  )
}
