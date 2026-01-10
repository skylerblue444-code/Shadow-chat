"use client";

export function Modal({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-black border p-4 rounded">
        {children}
        <button onClick={onClose} className="mt-2 text-sm text-gray-400">
          Close
        </button>
      </div>
    </div>
  );
}