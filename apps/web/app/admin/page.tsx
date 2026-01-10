import FeatureToggle from "../../components/FeatureToggle";
import UserModeration from "../../components/UserModeration";

export default function AdminPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <FeatureToggle />
      <UserModeration />
    </div>
  );
}