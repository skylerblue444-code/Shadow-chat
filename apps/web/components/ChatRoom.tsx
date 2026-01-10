"use client";

import { useState } from "react";
import { Message } from "@/types/message";
import { MessageBubble } from "./MessageBubble";
import { MessageInput } from "./MessageInput";
import { useSocket } from "@/hooks/useSocket";

export function ChatRoom({ chatId }: { chatId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);

  useSocket((msg) => {
    if (msg.chatId === chatId) {
      setMessages((m) => [...m, msg]);
    }
  });

  return (
    <div className="border p-3 rounded">
      <div className="space-y-1 max-h-64 overflow-y-auto">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>
      <MessageInput chatId={chatId} />
    </div>
  );
}