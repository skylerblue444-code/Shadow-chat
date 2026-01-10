export default function ChatInput() {
  return (
    <div className="flex gap-2 mt-4">
      <input
        className="flex-1 bg-bg p-2 rounded"
        placeholder="Type a message..."
      />
      <button className="bg-accent px-4 rounded">Send</button>
    </div>
  );
}