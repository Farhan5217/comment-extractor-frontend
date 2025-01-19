# eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "react/no-unescaped-entities": "off",  // This will turn off the quotes warning
      "@typescript-eslint/no-explicit-any": "off"
    },
    ignorePatterns: [
      "node_modules/",
      ".next/",
      "dist/"
    ]
  }
];

export default eslintConfig;
