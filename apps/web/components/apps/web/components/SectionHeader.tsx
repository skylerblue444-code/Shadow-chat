export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-lg font-semibold mb-4 text-gray-200">
      {title}
    </h2>
  );
}