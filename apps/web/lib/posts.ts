import { api } from "./api";
import { Post } from "@/types/post";
import { Comment } from "@/types/comment";

export function getFeed() {
  return api<Post[]>("/posts");
}

export function createPost(content: string) {
  return api<Post>("/posts", {
    method: "POST",
    body: JSON.stringify({ content }),
  });
}

export function getComments(postId: string) {
  return api<Comment[]>(`/posts/${postId}/comments`);
}