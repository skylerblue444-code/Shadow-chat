import AnimatedPage from "@/components/AnimatedPage";

export default function StatusPage() {
  return (
    <AnimatedPage>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">System Status</h1>

        <ul className="text-sm space-y-2 text-neutral-300">
          <li>🟢 API — Operational</li>
          <li>🟢 Database — Operational</li>
          <li>🟢 Messaging — Operational</li>
          <li>🟡 Wallet — Beta</li>
          <li>🟡 AI — Internal / Beta</li>
        </ul>

        <p className="text-xs text-neutral-500">
          Status reflects internal monitoring and may change without notice.
        </p>
      </div>
    </AnimatedPage>
  );
}