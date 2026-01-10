"use client";

import { useEffect, useState } from "react";
import { Comment } from "@/types/comment";
import { getComments } from "@/lib/posts";
import { CommentItem } from "./CommentItem";

export function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(postId).then(setComments);
  }, [postId]);

  return (
    <div className="mt-2 space-y-1">
      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} />
      ))}
    </div>
  );
}