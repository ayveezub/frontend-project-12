# Testing

Run tests with `npm test` (Vitest). Tests live in `__tests__/`.

The smoke test and the Hexlet project check enter the app only through `src/init.jsx`:

1. Call `init(socket)` with a Socket.IO socket.
2. Render the returned React element.
3. Expect the markup to contain `Hexlet Chat`.
4. Expect `socket.on` to have been called.

The starter fails this test on purpose: `App` renders nothing and `init` ignores the socket. Implement the contract. Do not weaken the test.

Adding the auth guard must not break this contract: the initial markup of `/` still contains `Hexlet Chat`. Redirect an unauthenticated user from `/` to `/login` after mount (or seed a token before rendering). Do not replace the chat heading with a render-time `<Navigate>` that renders nothing.

`.github/workflows/hexlet-check.yml` runs the project check on every push.

## Testing authorization

MSW intercepts `POST /api/v1/login` and returns `{ token: "test-token", username }`. The resolver spy `loginResolver` captures the request body.

* Clear `localStorage` in `afterEach` so a token from one test does not leak into the next.
* To render the chat page without going through the login form, put credentials into the store. Setting only `localStorage` is not enough: the store rehydrates when the module loads, which already happened by the time the test body runs.

```jsx
import { useAuthStore } from "../src/store/authStore.js";

useAuthStore.setState({ token: "test-token", username: "admin" });
```

After a successful login, the persisted record is available as:

```js
JSON.parse(localStorage.getItem("auth"));
// { state: { token: "test-token", username: "admin" }, version: 0 }
```
