import AnimatedPage from "@/components/AnimatedPage";
import WalletConnect from "@/components/WalletConnect";
import TransactionHistory from "@/components/TransactionHistory";

export default function WalletPage() {
  return (
    <AnimatedPage>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Wallet</h2>
        <WalletConnect />
        <TransactionHistory />
      </div>
    </AnimatedPage>
  );
}