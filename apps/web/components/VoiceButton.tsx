"use client";

export function VoiceButton() {
  return (
    <button
      className="px-4 py-2 rounded bg-black text-white"
      onClick={() => alert("Voice capture requires confirmation")}
    >
      Hold to Talk
    </button>
  );
}