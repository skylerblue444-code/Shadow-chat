import WalletCard from "../../components/WalletCard";
import TransactionHistory from "../../components/TransactionHistory";

export default function WalletPage() {
  return (
    <div className="max-w-lg mx-auto space-y-4">
      <WalletCard />
      <TransactionHistory />
    </div>
  );
}