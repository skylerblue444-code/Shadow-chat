import Reaction from "./Reaction";

export default function Post({ post }: any) {
  return (
    <div className="bg-panel p-4 rounded">
      <div className="text-sm text-gray-400">{post.author}</div>
      <p className="my-2">{post.content}</p>
      <Reaction />
    </div>
  );
}