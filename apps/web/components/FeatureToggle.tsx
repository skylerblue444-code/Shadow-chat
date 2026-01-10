export default function FeatureToggle() {
  return (
    <div className="bg-panel p-4 rounded">
      <h3 className="font-semibold mb-2">Feature Flags</h3>
      <label className="flex gap-2">
        <input type="checkbox" /> Enable Messaging
      </label>
      <label className="flex gap-2 mt-2">
        <input type="checkbox" /> Enable Wallet
      </label>
    </div>
  );
}