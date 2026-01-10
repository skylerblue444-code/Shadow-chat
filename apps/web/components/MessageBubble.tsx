"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

export default function MessageBubble({ message }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="mb-2"
    >
      <span className="text-sm text-gray-400">{message.from}</span>
      <div className="bg-bg inline-block px-3 py-1 rounded ml-2">
        {message.text}
      </div>
    </motion.div>
  );
}