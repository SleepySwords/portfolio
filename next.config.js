/** @type {import('next').NextConfig} */
const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ mode: "static", schemaPath: "./markdoc" })({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
  output: "export",
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
});
