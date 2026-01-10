"use client";

import { motion } from "framer-motion";

export default function VideoCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-panel p-4 rounded cursor-pointer"
    >
      <div className="h-32 bg-bg mb-2" />
      <h4>Live Stream</h4>
    </motion.div>
  );
}