export default function TransactionHistory() {
  const mockTxs = [
    { id: 1, type: "Tip", amount: "-2.5 SC", date: "2026-01-01" },
    { id: 2, type: "Reward", amount: "+5.0 SC", date: "2026-01-02" },
  ];

  return (
    <div className="border border-white/10 rounded-lg p-4">
      <h3 className="font-medium mb-3">Recent Activity</h3>

      <ul className="space-y-2 text-sm">
        {mockTxs.map((tx) => (
          <li
            key={tx.id}
            className="flex justify-between text-neutral-300"
          >
            <span>{tx.type}</span>
            <span>{tx.amount}</span>
            <span className="text-neutral-500">{tx.date}</span>
          </li>
        ))}
      </ul>

      <div className="text-xs mt-3 text-neutral-500">
        Transactions shown are simulated for preview purposes.
      </div>
    </div>
  );
}