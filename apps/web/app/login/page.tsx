"use client";

import { login } from "@/lib/auth";
import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">Login</h1>
      <AuthForm onSubmit={login} />
    </main>
  );
}