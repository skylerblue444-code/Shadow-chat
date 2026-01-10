"use client";

import { useState } from "react";
import { Button } from "./Button";
import { getSocket } from "@/lib/socket";

export function MessageInput({ chatId }: { chatId: string }) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;
    getSocket().emit("message", { chatId, body: text });
    setText("");
  }

  return (
    <div className="flex gap-2 mt-2">
      <input
        className="flex-1 bg-black border border-gray-700 p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message..."
      />
      <Button onClick={send}>Send</Button>
    </div>
  );
}