export function UserBadge({ userId }: { userId: string }) {
  return (
    <span className="text-xs text-gray-400">
      @{userId.slice(0, 6)}
    </span>
  );
}