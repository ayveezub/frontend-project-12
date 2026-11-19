import { describe, expect, test, vi } from "vitest";
import { renderToString } from "react-dom/server";

import init from "../src/init.jsx";

// The student copies the starter, and the project check enters the app through
// init: it calls init with its socket and renders whatever init returned.
// The test repeats the same path, so a broken contract is visible here rather
// than in the student's repository, where it would look like a student error.
describe("entry point", () => {
  test("init accepts a socket and returns markup", async () => {
    const socket = { on: vi.fn() };

    const markup = renderToString(await init(socket));

    expect(markup).toContain("Hexlet Chat");
    // The event subscription is checked because the socket was already a
    // parameter that init ignored: from the outside it looked like it worked.
    expect(socket.on).toHaveBeenCalled();
  });
});
