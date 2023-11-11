import Navbar from "@/components/navbar";
import Markdoc from '@markdoc/markdoc';
import React from 'react'; // or 'preact'
import { CodeBlock } from "@/components/CodeBlock";

const doc = `
# Hello world.
> My first Markdoc page

\`\`\`rust
pub fn test() {
  println!("This is a test!");
}
{% table %}
* Heading 1
* Heading 2
---
* Row 1 Cell 1
* Row 1 Cell 2
---
* Row 2 Cell 1
* Row 2 cell 2
{% /table %}

\`\`\`

`;

export default function Blog() {
  const ast = Markdoc.parse(doc);

  const content = Markdoc.transform(ast);

  const react = Markdoc.renderers.react(content, React, {
    components: {
      CodeBlock: CodeBlock
    }
  });
  return (
    <div className="relative mt-10 flex grid flex-grow w-full">
      <div className="w-full">
        <div>
          <h1
            className="mb-10 text-3xl font-bold secondary-colour"
          >
            Blogs
          </h1>
        </div>
        {react}
      </div>
    </div>
  );
}
