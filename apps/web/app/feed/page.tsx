"use client";

import { useEffect, useState } from "react";
import { getFeed } from "@/lib/posts";
import { Post } from "@/types/post";
import { PostCard } from "@/components/PostCard";
import { PostComposer } from "@/components/PostComposer";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  function load() {
    getFeed().then(setPosts);
  }

  useEffect(load, []);

  return (
    <main className="p-6 space-y-4 max-w-xl mx-auto">
      <PostComposer onPost={load} />
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </main>
  );
}