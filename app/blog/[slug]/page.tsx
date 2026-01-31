import fs from "fs";
import path from "path";
import SideBar from "@/components/Sidebar";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { components, config } from "@/markdoc/markdoc";
import matter from "gray-matter";
import MarkdownContent from "@/components/MarkdownContent";

const cwd = process.cwd();

// FIXME: This is the most jank shit, could be fixed when
// the discussion https://github.com/markdoc/markdoc/discussions/462
// has a better resolution.
export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(cwd, "./articles"),
  );
  const articles = await Promise.all(
    files.map(async (post) => {
      const slug = post.replace(".md", "");
      const { content, ast, title, date } = await getMarkdocContent(slug);
      return { content: content, ast: ast, slug: slug, title: title, date: date };
    }),
  );
  articles.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return articles;
}

async function getMarkdocContent(slug: string) {
  const file = fs.readFileSync(
    path.join(
      cwd,
      "./articles/".concat(slug, ".md"),
    ),
    "utf-8",
  );

  const { title, date } = matter(file).data;

  const ast = Markdoc.parse(file);
  const content = Markdoc.transform(ast, config);

  return { content, ast, title, date };
}

function extractHeadings(node: any, sections: any[] = []) {
  if (node) {
    if (node.type == "heading") {
      const section = {
        title: node.children[0].children[0].attributes.content,
        level: node.attributes.level,
      };
      sections.push(section);
    }
    if (node.children) {
      for (const n of node.children) {
        extractHeadings(n, sections);
      }
    }
  }
  return sections;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const staticParams = await generateStaticParams();
  const slug = (await params).slug;
  const { content, ast, title, date } = staticParams.filter((a) => a.slug == slug)[0];
  const tableOfContents = extractHeadings(ast);
  const reactContent = Markdoc.renderers.react(content, React, { components });

  return (
    <main className="flex" style={{ gridTemplateColumns: "1fr 4fr 1fr" }}>
      <div className="hidden shrink-0 grow-0 basis-64 sm:flex">
        <SideBar posts={staticParams} />
      </div>
      <MarkdownContent
        title={title}
        date={date}
        content={reactContent}
        tableOfContents={tableOfContents}
      />
    </main>
  );
}
