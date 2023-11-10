import Navbar from "@/components/navbar";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Navbar />

      <div className="relative flex grid flex-grow place-items-center">
        <div className="place-items-center text-center">
          <div>
            <h1
              className="mb-10 text-6xl font-bold"
              style={{ color: "#EBBAB9" }}
            >
              This is supposed to use markdoc :)
            </h1>
          </div>
          <a
            className="text-xl font-bold text-pink-300"
            style={{ color: "#FF9997" }}
          >
            Under construction
          </a>
        </div>
      </div>
    </main>
  );
}
