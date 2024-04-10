import { MarkdownLink } from "@/components/MarkdownLink";
import { CodeBlock } from "@/components/CodeBlock";
import { MarkdownList } from "@/components/MarkdownList";
import { Config, nodes } from "@markdoc/markdoc";
import { Heading } from "@/components/Heading";
import Callout from "@/components/Callout";

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

export const callout = {
  render: "Callout",
  // children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "note",
      matches: ["caution", "check", "note", "warning"],
    },
    title: {
      type: String,
    },
  },
};

export const components = {};

export const config: Config = {
  nodes: {},
  variables: {},
  tags: {},
};
