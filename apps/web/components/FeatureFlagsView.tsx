import { flags } from "@/lib/flags";

export function FeatureFlagsView() {
  return (
    <pre className="text-xs text-gray-400">
      {JSON.stringify(flags, null, 2)}
    </pre>
  );
}