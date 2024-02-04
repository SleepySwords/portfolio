import fs from "fs";
import path from "path";
import getConfig from "next/config";
import SideBar from "@/components/Sidebar";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import {
  components,
  config,
} from "@/markdoc/markdoc";
import matter from "gray-matter";
import TableOfContents from "@/components/TableOfContents";
import Math from "@/components/Math";

const { serverRuntimeConfig } = getConfig();

// FIXME: This is the most jank shit, could be fixed when
// the discussion https://github.com/markdoc/markdoc/discussions/462
// has a better resolution.
export async function generateStaticParams() {
  let files = fs.readdirSync(
    path.join(serverRuntimeConfig.PROJECT_ROOT, "./articles"),
  );
  let articles = await Promise.all(
    files.map(async (post) => {
      const slug = post.replace(".md", "");
      const { title, date } = await getMarkdocContent(slug);
      return { slug: slug, title: title, date: date };
    }),
  );
  articles.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return articles;
}

async function getMarkdocContent(slug: string) {
  let file = fs.readFileSync(
    path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      "./articles/".concat(slug, ".md"),
    ),
    "utf-8",
  );

  let { title, date } = matter(file).data;

  let ast = Markdoc.parse(file);
  let content = Markdoc.transform(ast, config);

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
      for (let n of node.children) {
        extractHeadings(n, sections);
      }
    }
  }
  return sections;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const staticParams = await generateStaticParams();
  const { content, ast, title, date } = await getMarkdocContent(params.slug);

  const tableOfContents = extractHeadings(ast);

  const react = Markdoc.renderers.react(content, React, { components });

  return (
    <main className="flex" style={{ gridTemplateColumns: "1fr 4fr 1fr" }}>
      <div className="hidden shrink-0 grow-0 basis-64 sm:flex">
        <SideBar posts={staticParams} />
      </div>
      <div className="remove-all flex-grow">
        <div className="mb-5 text-3xl font-bold">
          {title} - {date.toLocaleDateString()}
        </div>
        <Math>{react}</Math>
      </div>
      <div className="hidden shrink-0 grow-0 basis-64 lg:flex">
        <TableOfContents tableOfContents={tableOfContents} />
      </div>
    </main>
  );
}
