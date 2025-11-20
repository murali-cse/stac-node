import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  {
    ignores: [
      // Exclude the configuration file itself to prevent the linting error
      "eslint.config.ts",

      // Common ignores (optional, but good practice)
      "**/node_modules/",
      "**/dist/",
      "**/build/",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, import: importPlugin },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "@typescript-eslint/no-explicit-any": ["off"],
      "import/extensions": [
        "error",
        "always",
        {
          js: "always",
          json: "never",
          ts: "never",
        },
      ],
    },
  },
  tseslint.configs.recommended,
]);
