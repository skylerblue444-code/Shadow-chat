import { api } from "../lib/api";

export function useAuth() {
  async function login(email: string, password: string) {
    const res = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    localStorage.setItem("token", res.accessToken);
  }

  async function register(email: string, password: string) {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    localStorage.setItem("token", res.accessToken);
  }

  function logout() {
    localStorage.removeItem("token");
  }

  return { login, register, logout };
}