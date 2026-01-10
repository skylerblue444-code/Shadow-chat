import { useEffect, useState } from "react";
import { api } from "../lib/api";

export function useFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("/posts")
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  async function createPost(content: string) {
    const post = await api("/posts", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
    setPosts(p => [post, ...p]);
  }

  return { posts, loading, createPost };
}