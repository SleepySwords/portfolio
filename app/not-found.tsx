import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col flex-grow items-center justify-between">
      <div className="relative flex flex-grow place-items-center p-8">
        <div className="place-items-center text-center">
          <div>
            <h1
              className="mb-10 text-5xl font-bold"
              style={{ color: "#EBBAB9" }}
            >
              Not found :(
            </h1>
          </div>
          <Link
            href="/"
            className="text-xl font-bold text-pink-300"
            style={{ color: "#FF9997" }}
          >
            Return home?
          </Link>
        </div>
      </div>
    </main>
  );
}
