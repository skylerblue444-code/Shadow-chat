"use client";

import { tipUser } from "@/lib/wallet";

export function TipButton({ userId }: { userId: string }) {
  return (
    <button
      className="border px-2 py-1 text-xs rounded"
      onClick={() => tipUser(userId)}
    >
      Tip
    </button>
  );
}