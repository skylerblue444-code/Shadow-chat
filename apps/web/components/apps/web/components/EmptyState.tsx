export default function EmptyState({ label }: { label: string }) {
  return (
    <div className="text-center text-gray-400 py-12">
      {label}
    </div>
  );
}