import { http, HttpResponse } from "msw";
import { vi } from "vitest";

// Captures the login request body so a feature test can assert what the
// form actually sent, not only that the network layer was touched.
export const loginResolver = vi.fn();

export const loginHandler = http.post("*/api/v1/login", async ({ request }) => {
  const body = await request.json();
  loginResolver(body);

  return HttpResponse.json({
    token: "test-token",
    username: body.username,
  });
});

export const handlers = [loginHandler];
