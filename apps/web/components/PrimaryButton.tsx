"use client";

import { motion } from "framer-motion";
import { clickFeedback } from "../lib/feedback";

export default function PrimaryButton({ children }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={clickFeedback}
      className="bg-accent px-4 py-2 rounded-lg font-medium"
    >
      {children}
    </motion.button>
  );
}