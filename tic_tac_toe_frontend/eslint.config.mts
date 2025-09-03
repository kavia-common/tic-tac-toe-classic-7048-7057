import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    },
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".expo/**",
      ".expo-shared/**",
      "android/**",
      "ios/**",
      "web/**",
      "metro.config.*",
      "babel.config.*",
      // workspace level
      "../android/**",
      "../gradle/**",
      "../.gradle/**",
      // repo root
      "../../android/**",
      "../../gradle/**",
      "../../.gradle/**",
      "../../**/android/**",
      "../../**/gradle/**",
      "../../**/.gradle/**"
    ]
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "import/no-extraneous-dependencies": "off"
    },
    files: [
      "metro.config.*",
      "babel.config.*",
      "eslint.config.*",
      "tsconfig.json"
    ]
  }
]);
