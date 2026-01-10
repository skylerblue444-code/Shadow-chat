export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center py-16 space-y-2 text-neutral-400">
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}