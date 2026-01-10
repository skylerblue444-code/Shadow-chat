"use client";

import { ChatRoom } from "@/components/ChatRoom";

export default function MessagesPage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-lg mb-4">Messages</h1>
      <ChatRoom chatId="global" />
    </main>
  );
}