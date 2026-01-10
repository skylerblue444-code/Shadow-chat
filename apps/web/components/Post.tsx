"use client";

import { motion } from "framer-motion";
import Reaction from "./Reaction";
import { fadeInUp } from "../lib/motion";

export default function Post({ post }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-panel p-4 rounded"
      whileHover={{ scale: 1.01 }}
    >
      <div className="text-sm text-gray-400">{post.author}</div>
      <p className="my-2">{post.content}</p>
      <Reaction />
    </motion.div>
  );
}