export default function EmptyState({ label }: { label: string }) {
  return (
    <div className="text-center text-gray-400 py-10">
      {label}
    </div>
  );
}