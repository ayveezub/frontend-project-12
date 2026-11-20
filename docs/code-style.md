# Code style

Lint and format with **oxlint** and **oxfmt**.

`oxlint.config.ts` and `oxfmt.config.ts` are copied from `hexlet-exercise-kit` and must stay as-is. oxlint/oxfmt find them without `--config`. They use a plain default export, not `defineConfig`.

Do not add TypeScript for application code.

Comments, identifiers, and test names are in English.

Generated files listed in [../AGENTS.md](../AGENTS.md) must not be edited. They may not exist yet: `*.gen.ts` is hey-api output, and `src/@types/**` is i18next resource types.

Fix issues in source. Do not silence rules in the frozen configs.
