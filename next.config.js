/** @type {import('next').NextConfig} */
const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ mode: "static", schemaPath: "./markdoc" })({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
  output: "export",
  images: { unoptimized: true },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  compress: false,
});
