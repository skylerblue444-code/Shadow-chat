"use client";

import { motion } from "framer-motion";

export default function WalletCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-panel p-6 rounded"
    >
      <h2 className="text-xl mb-2">Wallet</h2>
      <p className="text-gray-400">Balance: 1.245 SHDW</p>
      <button className="mt-4 bg-accent px-4 py-2 rounded">
        Connect Wallet
      </button>
    </motion.div>
  );
}