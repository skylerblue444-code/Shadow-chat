import AnimatedPage from "@/components/AnimatedPage";

export default function RoadmapPage() {
  return (
    <AnimatedPage>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-2xl font-semibold">Product Roadmap</h1>

        <ul className="space-y-4 text-sm text-neutral-300">
          <li>
            <strong>Q1:</strong> Public beta, core social, messaging
          </li>
          <li>
            <strong>Q2:</strong> Creator tools, wallet activation, AI expansion
          </li>
          <li>
            <strong>Q3:</strong> Streaming, subscriptions, marketplace
          </li>
          <li>
            <strong>Q4:</strong> Governance, reputation, decentralized features
          </li>
        </ul>

        <p className="text-xs text-neutral-500">
          Roadmap is subject to change based on feedback and platform health.
        </p>
      </div>
    </AnimatedPage>
  );
}