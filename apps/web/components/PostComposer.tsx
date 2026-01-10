export default function PostComposer() {
  return (
    <div className="bg-panel p-4 rounded mb-4">
      <textarea
        className="w-full bg-bg p-2 rounded"
        placeholder="What’s happening?"
      />
      <button className="mt-2 bg-accent px-4 py-2 rounded">
        Post
      </button>
    </div>
  );
}