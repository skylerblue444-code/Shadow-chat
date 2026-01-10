export default function WalletCard() {
  return (
    <div className="bg-panel p-6 rounded">
      <h2 className="text-xl mb-2">Wallet</h2>
      <p className="text-gray-400">Balance: 1.245 SHDW</p>
      <button className="mt-4 bg-accent px-4 py-2 rounded">
        Connect Wallet
      </button>
    </div>
  );
}