/**
 * Flat config is already in eslint.config.mts; this file helps editors/CI discover configuration
 * when scanning from this workspace directory.
 */
module.exports = {
  root: true,
  ignorePatterns: [
    "node_modules/**",
    "dist/**",
    "build/**",
    ".expo/**",
    ".expo-shared/**",
    "android/**",
    "ios/**",
    "web/**"
  ],
};
