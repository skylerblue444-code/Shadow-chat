import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

const messages = [
  { id: 1, from: "Alice", text: "Hey" },
  { id: 2, from: "Bob", text: "Still private 👀" }
];

export default function ChatRoom() {
  return (
    <div className="bg-panel p-4 rounded">
      <ChatHeader />
      {messages.map(m => (
        <MessageBubble key={m.id} message={m} />
      ))}
      <ChatInput />
    </div>
  );
}