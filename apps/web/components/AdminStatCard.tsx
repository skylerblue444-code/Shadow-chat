export default function AdminStatCard({ label, value }: any) {
  return (
    <div className="bg-panel p-4 rounded text-center">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xl">{value}</div>
    </div>
  );
}