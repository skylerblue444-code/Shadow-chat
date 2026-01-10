import Sidebar from "../../components/Sidebar";

export default function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <section className="flex-1">{children}</section>
    </div>
  );
}