import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { beforeEach, describe, expect, test } from "vitest";

import { useAuthStore } from "../src/store/authStore.js";
import renderApp from "./helpers/renderApp.jsx";
import { loginResolver } from "./mocks/handlers.js";
import { server } from "./mocks/server.js";

describe("login page", () => {
  beforeEach(() => {
    loginResolver.mockClear();
    // setState goes through persist and writes to localStorage,
    // so clear the storage after the store has been reset.
    useAuthStore.setState({ token: null, username: null });
    localStorage.clear();
  });

  test("successful login sends credentials, stores the token, and redirects to the chat page", async () => {
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

    expect(JSON.parse(localStorage.getItem("auth"))).toEqual({
      state: { token: "test-token", username: "admin" },
      version: 0,
    });
  });

  test("visitor without a token is redirected from / to /login", async () => {
    await renderApp({ path: "/" });

    expect(await screen.findByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/login");
    expect(loginResolver).not.toHaveBeenCalled();
  });

  test("user with a saved token opens the chat page", async () => {
    useAuthStore.setState({ token: "test-token", username: "admin" });

    await renderApp({ path: "/" });

    expect(await screen.findByRole("heading", { name: "Hexlet Chat" })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/");
  });

  test("logged-in user is redirected from /login to the chat page", async () => {
    useAuthStore.setState({ token: "test-token", username: "admin" });

    await renderApp({ path: "/login" });

    expect(await screen.findByRole("heading", { name: "Hexlet Chat" })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/");
  });

  test("invalid credentials keep the user on /login and do not save a token", async () => {
    server.use(
      http.post("*/api/v1/login", async ({ request }) => {
        loginResolver(await request.json());
        return new HttpResponse(null, { status: 401 });
      }),
    );

    const user = userEvent.setup();
    await renderApp({ path: "/login" });

    await user.type(screen.getByLabelText("Username"), "admin");
    await user.type(screen.getByLabelText("Password"), "wrong");
    await user.click(screen.getByRole("button", { name: "Log In" }));

    await waitFor(() => expect(loginResolver).toHaveBeenCalledTimes(1));

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/login");
    expect(localStorage.getItem("auth")).toBeNull();
  });
});
