# Testing

Run tests with `npm test` (Vitest). Tests live in `__tests__/`.

The smoke test and the Hexlet project check enter the app only through `src/init.jsx`:

1. Call `init(socket)` with a Socket.IO socket.
2. Render the returned React element.
3. Expect the markup to contain `Hexlet Chat`.
4. Expect `socket.on` to have been called.

The starter fails this test on purpose: `App` renders nothing and `init` ignores the socket. Implement the contract. Do not weaken the test.

`.github/workflows/hexlet-check.yml` runs the project check on every push.
