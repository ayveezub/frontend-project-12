# Chat (Slack)

[![hexlet-check](https://github.com/ayveezub/frontend-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ayveezub/frontend-project-12/actions)

Write a real-time application in React using AJAX, REST, websockets, React (with hooks) + Zustand + TanStack Query + @mantine/form

Hexlet educational project: https://ru.hexlet.io/programs/frontend
How it should work: https://files.hexlet.app/a/ose685


## Stack

- JavaScript, React 19, Vite
- Zustand (auth state, `persist` middleware)
- React Router
- @mantine/core, @mantine/form
- Socket.IO
- Vitest, Testing Library, MSW

## Installation

```bash
git clone https://github.com/ayveezub/frontend-project-12.git
cd frontend-project-12
npm ci
```

## Usage

```bash
make develop
```

Open <http://localhost:5002>. The backend API and Socket.IO run on `:5001` (see `docs/development.md`).

Log in with the default account:

* username: `admin`
* password: `admin`

On success the app saves the JWT to `localStorage` (via zustand persist) and opens the chat. Visiting `/` without a token redirects to `/login`.

---

<details>
<summary>Hexlet automated tests</summary>

Tests run on every commit. The `.github/workflows/hexlet-check.yml` file is responsible for launching them — do not delete or rename it or the repository.

</details>

## About Hexlet

[Hexlet](https://ru.hexlet.io/) is a programming school: original learning programs with practice, mentor support, and real projects that stay on your resume. This repository is one of those projects.
