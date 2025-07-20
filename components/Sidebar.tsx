import React from "react";
import Link from "next/link";

export default function SideBar({
  posts,
}: {
  posts: { slug: string; title: string; date: Date }[];
}) {
  return (
    <div>
      <ul className="sticky top-36 mr-5">
        <li className="mb-5 text-2xl font-bold">All blogs</li>
        {/* HACK: The order of blogs would not change */}
        {posts.map((post, id) => (
          <li key={id}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-1xl underline transition-colors hover:text-gray-400"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
