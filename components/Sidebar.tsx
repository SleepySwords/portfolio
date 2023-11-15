import React from "react";
import Link from "next/link";

export default function SideBar({ posts }: { posts: { slug: string, id: number, title: string, date: Date }[] }) {
  return (
    <div>
      <ul className="sticky top-36">
        <li className="font-bold text-2xl mb-5">All blogs</li>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="underline text-1xl">{post.title} - {post.date.toLocaleDateString()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
