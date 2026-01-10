import TransactionRow from "./TransactionRow";

const txs = [
  { id: 1, type: "Received", amount: "+0.5 SHDW" },
  { id: 2, type: "Sent", amount: "-0.2 SHDW" }
];

export default function TransactionHistory() {
  return (
    <div className="bg-panel p-4 rounded">
      <h3 className="mb-2 font-semibold">Transactions</h3>
      {txs.map(tx => (
        <TransactionRow key={tx.id} tx={tx} />
      ))}
    </div>
  );
}