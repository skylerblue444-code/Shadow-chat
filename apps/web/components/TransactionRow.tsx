export default function TransactionRow({ tx }: any) {
  return (
    <div className="flex justify-between text-sm border-b border-gray-800 py-1">
      <span>{tx.type}</span>
      <span>{tx.amount}</span>
    </div>
  );
}