# AGENTS.md

Hexlet educational Slack-like chat starter: React 19, Vite, Socket.IO.

Use npm. Never pnpm or yarn.

## Commands

```bash
npm ci          # install (not npm install)
make develop    # backend :5001 + Vite :5002
npm test        # Vitest
npm run lint    # oxlint + oxfmt --check
```

## Hard rules

- Do not edit or delete `.github/workflows/hexlet-check.yml`.
- Do not rename this repository.
- Do not edit `oxlint.config.ts` or `oxfmt.config.ts`.
- Do not edit generated files: `**/*.gen.ts`, `src/types/handlers/**`, `src/@types/**`.
- Keep `init(socket)` async: accept the socket, subscribe with `socket.on`, return a React element. Details: [docs/testing.md](docs/testing.md).
- Use Conventional Commits. Details: [docs/git-workflow.md](docs/git-workflow.md).

## Topic files

- [docs/development.md](docs/development.md)
- [docs/code-style.md](docs/code-style.md)
- [docs/testing.md](docs/testing.md)
- [docs/git-workflow.md](docs/git-workflow.md)
