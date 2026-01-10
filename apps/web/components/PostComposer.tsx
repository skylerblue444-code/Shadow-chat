"use client";

import { useState } from "react";
import { Button } from "./Button";
import { createPost } from "@/lib/posts";

export function PostComposer({ onPost }: { onPost: () => void }) {
  const [content, setContent] = useState("");

  async function submit() {
    if (!content.trim()) return;
    await createPost(content);
    setContent("");
    onPost();
  }

  return (
    <div className="border p-3 rounded space-y-2">
      <textarea
        className="w-full bg-black border border-gray-700 p-2 rounded"
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={submit}>Post</Button>
    </div>
  );
}