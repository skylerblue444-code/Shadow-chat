import AdminStatCard from "./AdminStatCard";

export default function AdminStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <AdminStatCard label="Users" value="1,204" />
      <AdminStatCard label="Streams" value="42" />
      <AdminStatCard label="Reports" value="3" />
    </div>
  );
}