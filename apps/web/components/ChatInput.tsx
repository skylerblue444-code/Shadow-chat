"use client";

import { motion } from "framer-motion";

export default function ChatInput() {
  return (
    <div className="flex gap-2 mt-4">
      <input className="flex-1 bg-bg p-2 rounded" placeholder="Type a message..." />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent px-4 rounded"
      >
        Send
      </motion.button>
    </div>
  );
}