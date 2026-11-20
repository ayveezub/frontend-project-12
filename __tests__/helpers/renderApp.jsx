import { render } from "@testing-library/react";
import { vi } from "vitest";

import init from "../../src/init.jsx";

// Mounts the real app through the same contract as the smoke test and the
// project check: init(socket) returns the element that is rendered.
// The socket is a stub because io() lives in src/index.jsx, not in init.
const renderApp = async ({ path = "/" } = {}) => {
  const socket = { on: vi.fn() };
  window.history.pushState({}, "", path);
  const view = render(await init(socket));
  return { socket, ...view };
};

export default renderApp;
