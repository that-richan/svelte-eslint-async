import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
    rules: {
      "svelte/valid-compile": "error",
      "svelte/no-target-blank": "error",
      "svelte/block-lang": [
        "error",
        {
          enforceScriptPresent: true,
          enforceStylePresent: false,
          script: ["ts"],
          style: [null],
        },
      ],
      "svelte/button-has-type": "error",
      "svelte/no-add-event-listener": "error",
      "svelte/no-ignored-unsubscribe": "error",
      "prefer-const": "off",
      "svelte/prefer-const": [
        "error",
        {
          destructuring: "all",
          excludedRunes: [],
        },
      ],
      "svelte/prefer-destructured-store-props": "error",
      "svelte/require-stores-init": "error",
      "svelte/no-top-level-browser-globals": "error",
    },
  },
]);
