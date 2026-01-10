"use client";

export function TipButton({ to }: { to: string }) {
  return (
    <button
      className="px-3 py-1 text-sm border rounded"
      onClick={() => alert(`Tip sent to ${to}`)}
    >
      Tip
    </button>
  );
}