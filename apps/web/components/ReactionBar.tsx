"use client";

import { ReactionType } from "@/types/reaction";

const reactions: ReactionType[] = ["LIKE", "LAUGH", "FIRE"];

export function ReactionBar() {
  return (
    <div className="flex gap-3 text-sm text-gray-400">
      {reactions.map((r) => (
        <button key={r}>{r}</button>
      ))}
    </div>
  );
}