"use client";

import { connectWallet } from "@/lib/wallet";

export function WalletConnectButton() {
  return (
    <button className="border px-3 py-1 rounded" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
}