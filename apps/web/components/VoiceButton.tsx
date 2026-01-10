"use client";

import { useState } from "react";
import { Modal } from "./Modal";

export function VoiceButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="border px-3 py-1 rounded"
        onClick={() => setOpen(true)}
      >
        Hold to Talk
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <p>Voice capture requires confirmation.</p>
      </Modal>
    </>
  );
}