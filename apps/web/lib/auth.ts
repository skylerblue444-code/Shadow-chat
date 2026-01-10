import { api } from "./api";
import { storage } from "./storage";

export async function login(email: string, password: string) {
  const res = await api<{ token: string }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  storage.setToken(res.token);
}

export async function register(email: string, password: string) {
  await api("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}