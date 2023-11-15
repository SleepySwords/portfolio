import fs from "fs";
import path from "path";
import getConfig from "next/config";
import SideBar from "@/components/Sidebar";
import Markdoc, { Config } from "@markdoc/markdoc";
import React from "react";
import { components, fence, heading, link, list } from "@/markdoc/nodes";
import matter from "gray-matter";
import TableOfContents from "@/components/TableOfContents";

const { serverRuntimeConfig } = getConfig();

// FIXME: This is the most jank shit, could be fixed when
// the discussion https://github.com/markdoc/markdoc/discussions/462
// has a better resolution.
export async function generateStaticParams() {
  let files = fs.readdirSync(
    path.join(serverRuntimeConfig.PROJECT_ROOT, "./articles"),
  );
  let count = 0;
  return await Promise.all(files.map(async (post) => {
    const slug = post.replace(".md", "")
    const { title, date } = await getMarkdocContent(slug);
    return { slug: slug, id: count, title: title, date: date }
  }));
}

const config: Config = {
  nodes: {
    fence,
    link,
    list,
    heading
  },
  variables: {},
  tags: {}
}

async function getMarkdocContent(slug: string) {
  let file = fs.readFileSync(path.join(serverRuntimeConfig.PROJECT_ROOT, "./articles/".concat(slug, ".md")), 'utf-8');

  let { title, date } = matter(file).data

  let ast = Markdoc.parse(file);
  let content = Markdoc.transform(ast, config);

  return { content, ast, title, date }
}

function extractHeadings(node: any, sections: any[] = []) {
  if (node) {
    if (node.type == "heading") {
      const section = {
        title: node.children[0].children[0].attributes.content,
        level: node.attributes.level
      }
      sections.push(section)
    }
    if (node.children) {
      for (let n of node.children) {
        extractHeadings(n, sections)
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
      <div className="hidden sm:flex grow-0 shrink-0 basis-64">
        <SideBar posts={staticParams} />
      </div>
      <div className="remove-all flex-grow">
        <div className="font-bold text-3xl mb-5">{title} - {date.toLocaleDateString()}</div>
        {react}
      </div>
      <div className="hidden lg:flex grow-0 shrink-0 basis-64">
        <TableOfContents tableOfContents={tableOfContents} />
      </div>
    </main>
  );
}
