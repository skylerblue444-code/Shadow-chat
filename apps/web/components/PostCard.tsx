import { Post } from "@/types/post";
import { UserBadge } from "./UserBadge";
import { ReactionBar } from "./ReactionBar";
import { CommentList } from "./CommentList";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="border p-3 rounded space-y-2">
      <UserBadge userId={post.authorId} />
      <p>{post.content}</p>
      <ReactionBar />
      <CommentList postId={post.id} />
    </div>
  );
}