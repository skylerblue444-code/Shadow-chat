"use client";

import { motion } from "framer-motion";

export default function Reaction() {
  return (
    <div className="flex gap-4 text-sm text-gray-400">
      {["👍 Like", "💬 Comment", "🔁 Share"].map(label => (
        <motion.button
          key={label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}