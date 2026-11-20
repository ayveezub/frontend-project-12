import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test } from "vitest";

import renderApp from "./helpers/renderApp.jsx";
import { loginResolver } from "./mocks/handlers.js";

describe("login page", () => {
  beforeEach(() => {
    loginResolver.mockClear();
  });

  test("successful login sends credentials and redirects to the chat page", async () => {
    const user = userEvent.setup();
    await renderApp({ path: "/login" });

    await user.type(screen.getByLabelText("Username"), "admin");
    await user.type(screen.getByLabelText("Password"), "admin");
    await user.click(screen.getByRole("button", { name: "Log In" }));

    expect(await screen.findByRole("heading", { name: "Hexlet Chat" })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/");
    expect(loginResolver).toHaveBeenCalledTimes(1);
    expect(loginResolver).toHaveBeenCalledWith({
      username: "admin",
      password: "admin",
    });
  });
});
