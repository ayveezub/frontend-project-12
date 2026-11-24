import { create } from "zustand";
import { persist } from "zustand/middleware";

// Authorization state for the whole app. The token is kept in localStorage
// under the "auth" key so a page reload keeps the user logged in.
export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      username: null,
      setAuth: ({ token, username }) => set({ token, username }),
      clearAuth: () => set({ token: null, username: null }),
    }),
    { name: "auth" },
  ),
);
