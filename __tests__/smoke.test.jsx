import { describe, expect, test, vi } from "vitest";
import { renderToString } from "react-dom/server";

import init from "../src/init.jsx";
import { useAuthStore } from "../src/store/authStore.js";

// The student copies the starter, and the project check enters the app through
// init: it calls init with its socket and renders whatever init returned.
// The test repeats the same path, so a broken contract is visible here rather
// than in the student's repository, where it would look like a student error.
describe("entry point", () => {
  test("init accepts a socket and returns markup", async () => {
    // The chat page is behind a token check. Seeding the store keeps the
    // init contract observable: the heading is still in the markup.
    useAuthStore.setState({ token: "test-token", username: "admin" });

    const socket = { on: vi.fn() };

    const markup = renderToString(await init(socket));

    expect(markup).toContain("Hexlet Chat");
    // The event subscription is checked because the socket was already a
    // parameter that init ignored: from the outside it looked like it worked.
    expect(socket.on).toHaveBeenCalled();
  });

  test("unauthenticated markup of / still contains Hexlet Chat", async () => {
    useAuthStore.setState({ token: null, username: null });

    const socket = { on: vi.fn() };

    const markup = renderToString(await init(socket));

    // The guard redirects after mount. It must not replace the heading with
    // a render-time Navigate that renders nothing on the server.
    expect(markup).toContain("Hexlet Chat");
    expect(socket.on).toHaveBeenCalled();
  });
});
