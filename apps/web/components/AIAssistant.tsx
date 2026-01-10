"use client";

import { useState } from "react";

export default function AIAssistant() {
  const [response, setResponse] = useState<string | null>(null);

  async function askAI() {
    const res = await fetch("/api/ai/market-summary", {
      method: "POST",
      body: JSON.stringify({
        symbol: "BTC",
        price: 42000,
        change24h: 2.4,
        volume: 1200000000,
      }),
    });

    const data = await res.json();
    setResponse(data.summary + " " + data.explanation);
  }

  return (
    <div className="space-y-4">
      <button
        onClick={askAI}
        className="px-4 py-2 rounded bg-white text-black"
      >
        Ask Shadow Intelligence
      </button>

      {response && (
        <div className="text-neutral-300 text-sm">
          {response}
          <div className="text-xs mt-2 opacity-60">
            Informational only. Not financial advice.
          </div>
        </div>
      )}
    </div>
  );
}