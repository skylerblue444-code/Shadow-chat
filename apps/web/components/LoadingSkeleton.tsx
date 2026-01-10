export default function LoadingSkeleton({ height = 16 }: { height?: number }) {
  return (
    <div
      className="animate-pulse rounded-md bg-neutral-800/60"
      style={{ height }}
    />
  );
}