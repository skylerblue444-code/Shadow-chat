import WalletSidebar from "../../components/WalletSidebar";

export default function WalletLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <WalletSidebar />
      <section className="flex-1">{children}</section>
    </div>
  );
}