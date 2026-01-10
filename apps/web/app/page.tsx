import AnimatedPage from "@/components/AnimatedPage";

export default function FeedPage() {
  return (
    <AnimatedPage>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Your Feed</h2>
        <div className="text-neutral-500 text-sm">
          No posts yet. Follow users to populate your feed.
        </div>
      </div>
    </AnimatedPage>
  );
}