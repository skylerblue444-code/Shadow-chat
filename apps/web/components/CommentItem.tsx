import { Comment } from "@/types/comment";
import { UserBadge } from "./UserBadge";

export function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="text-sm border-t border-gray-800 py-1">
      <UserBadge userId={comment.authorId} /> {comment.content}
    </div>
  );
}