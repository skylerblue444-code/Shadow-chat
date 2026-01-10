"use client";

import { useEffect } from "react";
import { getSocket } from "@/lib/socket";

export function useSocket(onMessage: (msg: any) => void) {
  useEffect(() => {
    const socket = getSocket();
    socket.on("message", onMessage);

    return () => {
      socket.off("message", onMessage);
    };
  }, [onMessage]);
}