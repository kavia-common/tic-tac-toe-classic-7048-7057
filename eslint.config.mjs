import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".expo/**",
      ".expo-shared/**",
      "android/**",
      "ios/**",
      "gradle/**",
      ".gradle/**",
      // App subpaths
      "tic_tac_toe_frontend/android/**",
      "tic_tac_toe_frontend/ios/**",
      "tic_tac_toe_frontend/build/**",
      "tic_tac_toe_frontend/dist/**",
      "tic_tac_toe_frontend/.expo/**",
      "tic_tac_toe_frontend/.expo-shared/**",
      // Any nested matches
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.expo/**",
      "**/.expo-shared/**",
      "**/android/**",
      "**/ios/**",
      "**/gradle/**",
      "**/.gradle/**"
    ],
  },
]);
