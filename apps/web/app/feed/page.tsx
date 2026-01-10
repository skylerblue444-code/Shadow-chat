import { api } from "@/lib/api";

export default async function FeedPage() {
  const posts = await api<any[]>("/posts");

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-lg font-semibold">Feed</h1>
      {posts.map((p) => (
        <div key={p.id} className="border p-3 rounded">
          <p>{p.content}</p>
        </div>
      ))}
    </main>
  );
}