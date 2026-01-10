export default function ReputationDisplay({ score = 0 }) {
  return (
    <div className="text-sm text-accent">
      ⭐ Reputation: {score}
    </div>
  );
}