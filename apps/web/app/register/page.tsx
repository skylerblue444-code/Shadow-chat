"use client";

import { register } from "@/lib/auth";
import { AuthForm } from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <main className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">Register</h1>
      <AuthForm onSubmit={register} />
    </main>
  );
}