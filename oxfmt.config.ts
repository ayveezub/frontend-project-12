// Hexlet's JS/TS formatting canon is the oxfmt defaults, so this file only
// lists what oxfmt does not touch: YAML, JSON, CSS, and markdown in the kit
// are handled by other tools (docs/js-code-style.md). oxfmt finds the file
// on its own, without --config, and in the components repository the file is
// copied as is.
//
// Object without `defineConfig`: importing it would require the oxfmt package
// in node_modules, while the kit binary is installed via mise. An invalid
// option is caught by oxfmt itself at load time (exit code 1).
export default {
  ignorePatterns: [
    "**/*.yml",
    "**/*.yaml",
    "**/*.json",
    "**/*.jsonc",
    "**/*.css",
    "**/*.md",
    "**/*.toml",
    "**/npm-cache/**",
    "**/vendor/**",
    "**/dist/**",
    "**/build/**",
    "**/coverage/**",
    "**/.venv/**",
    "**/__snapshots__/**",
    // Generated code is not edited: the file is overwritten by the code
    // generator, and a manual edit lives until the first run. The whole
    // directory is ignored because hey-api puts index.ts next to *.gen.ts,
    // and i18next-cli writes resource types into src/@types.
    "**/*.gen.ts",
    "**/src/types/handlers/**",
    "**/src/@types/**",
  ],
};
