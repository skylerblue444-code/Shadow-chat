"use client";

import { useState } from "react";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg p-4 space-y-3">
      <h3 className="font-medium">Wallet Connection</h3>

      {!connected ? (
        <button
          onClick={() => setConnected(true)}
          className="px-4 py-2 rounded bg-white text-black text-sm"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-sm text-green-400">
          Wallet connected (simulation)
        </div>
      )}

      <p className="text-xs text-neutral-500">
        Wallet features are in beta. No real assets are used.
      </p>
    </div>
  );
}