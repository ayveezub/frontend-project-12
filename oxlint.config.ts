// Hexlet's JS/TS lint canon is the oxlint defaults. The reference lives at the
// root of hexlet-exercise-kit, the guidelines are in its docs/js-code-style.md,
// and in the components repository the file is copied as is. oxlint finds it
// on its own, without --config.
//
// Object without `defineConfig`: importing it would resolve from this file and
// would require the oxlint package in node_modules, while the kit binary is
// installed via mise. A typo in a plugin, rule, or value is caught by oxlint
// itself at load time (exit code 1).
export default {
  // By default oxlint enables only typescript, unicorn, and oxc.
  plugins: [
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "promise",
    "node",
    "jsdoc",
    "jest",
    "vitest",
    "react",
    "react-perf",
    "jsx-a11y",
    "vue",
  ],
  categories: {
    correctness: "error",
  },
  rules: {
    // The student invents the error message; the rule would nail the test
    // to the reference implementation.
    "vitest/require-to-throw-message": "off",
    "vitest/no-standalone-expect": "off",
    "jest/no-standalone-expect": "off",
    "jest/valid-expect": ["error", { maxArgs: 2 }],
    "vitest/valid-expect": ["error", { maxArgs: 2 }],
  },
  env: {
    builtin: true,
    browser: true,
    node: true,
  },
  ignorePatterns: [
    "**/node_modules/**",
    "**/npm-cache/**",
    "**/vendor/**",
    "**/dist/**",
    "**/build/**",
    "**/coverage/**",
    "**/.venv/**",
    "**/__snapshots__/**",
  ],
};
