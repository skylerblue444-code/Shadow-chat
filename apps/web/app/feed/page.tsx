import MotionWrapper from "../../components/MotionWrapper";
import Post from "../../components/Post";
import { mockPosts } from "../../lib/mockData";

export default function FeedPage() {
  return (
    <MotionWrapper>
      <div className="max-w-xl mx-auto space-y-4">
        {mockPosts.map(p => <Post key={p.id} post={p} />)}
      </div>
    </MotionWrapper>
  );
}