import { MarkdownLink } from "@/components/MarkdownLink";
import { CodeBlock } from "@/components/CodeBlock";
import { MarkdownList } from "@/components/MarkdownList";
import { nodes } from "@markdoc/markdoc";
import { Heading } from "@/components/Heading";

export const link = {
  render: "MarkdownLink",
  attributes: nodes.link.attributes,
};

export const fence = {
  render: "CodeBlock",
  attributes: nodes.fence.attributes,
};

export const list = {
  render: "MarkdownList",
  attributes: nodes.list.attributes,
};

export const heading = {
  render: "Heading",
  attributes: nodes.heading.attributes,
};

export const components = {
  MarkdownLink: MarkdownLink,
  MarkdownList: MarkdownList,
  CodeBlock: CodeBlock,
  Heading: Heading,
};
