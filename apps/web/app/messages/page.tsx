"use client";

import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`)
      .then((r) => r.json())
      .then(setMessages);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-lg font-semibold">Messages</h1>
      {messages.map((m) => (
        <div key={m.id} className="border-b py-2">
          {m.body}
        </div>
      ))}
    </main>
  );
}