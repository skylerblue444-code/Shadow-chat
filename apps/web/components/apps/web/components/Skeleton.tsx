export default function Skeleton({ height = 4 }: { height?: number }) {
  return (
    <div
      className="w-full rounded bg-gradient-to-r 
      from-gray-800 via-gray-700 to-gray-800 animate-pulse"
      style={{ height: `${height * 0.25}rem` }}
    />
  );
}