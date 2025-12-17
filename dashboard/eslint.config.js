import reactCompiler from "eslint-plugin-react-compiler";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextConfig = require("eslint-config-next");

const config = [
  ...nextConfig,
  {
    plugins: {
      "react-compiler": reactCompiler,
    },

    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "react-compiler/react-compiler": "error",
    },
  },
];

export default config;
