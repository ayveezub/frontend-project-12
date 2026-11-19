# Development

## Install

```bash
npm ci
```

## Run

| Command               | What it does                                |
| --------------------- | ------------------------------------------- |
| `make develop`        | `start-server` on :5001 and Vite on :5002    |
| `make start-backend`  | `npx start-server -s ./dist` (API + static) |
| `make start-frontend` | `npm run dev` (Vite)                        |
| `make start`          | Same as `start-backend`                     |
| `npm run build`       | Production build to `dist/`                 |
| `npm run serve`       | Vite preview                                |

The backend is `@hexlet/chat-server`. Its `start-server` binary listens on **5001**.

Vite (`vite.config.js`) listens on **5002** and proxies:

- `/api` → `http://localhost:5001`
- `/socket.io` → `ws://localhost:5001` (WebSocket)

If `make develop` does not background both processes on Windows, run `make start-backend` and `make start-frontend` in separate terminals.

`package.json` → `allowScripts` disables install scripts for `@swc/core` and `fsevents`. Native bindings already ship in those packages; build and tests do not need the scripts.
