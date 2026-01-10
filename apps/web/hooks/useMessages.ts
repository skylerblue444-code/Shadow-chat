import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export function useMessages(roomId: string) {
  const [messages, setMessages] = useState<any[]>([]);
  const socket = io("http://localhost:3001", {
    auth: { token: localStorage.getItem("token") },
  });

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    socket.on("newMessage", msg => setMessages(m => [...m, msg]));
    return () => socket.disconnect();
  }, [roomId]);

  function send(content: string) {
    socket.emit("sendMessage", { roomId, content });
  }

  return { messages, send };
}