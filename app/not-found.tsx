import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Navbar />

      <div className="relative place-items-center flex flex-grow">
        <div className="place-items-center text-center">
          <div>
            <h1 className="text-5xl font-bold mb-10" style={{ color: "#EBBAB9" }}>Not found :(</h1>
          </div>
          <Link href="/" className="text-xl font-bold text-pink-300" style={{ color: "#FF9997" }}>
            Return home?
          </Link>
        </div>
      </div>
    </main>
  )
}
