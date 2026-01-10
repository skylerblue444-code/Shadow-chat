import ChatInput from "./ChatInput";

const messages = [
  { id: 1, user: "Viewer1", text: "🔥🔥🔥" },
  { id: 2, user: "Viewer2", text: "Nice stream!" }
];

export default function StreamChat() {
  return (
    <div className="bg-panel p-4 rounded flex flex-col h-64">
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map(m => (
          <div key={m.id} className="text-sm mb-1">
            <span className="text-accent">{m.user}</span>: {m.text}
          </div>
        ))}
      </div>
      <ChatInput />
    </div>
  );
}