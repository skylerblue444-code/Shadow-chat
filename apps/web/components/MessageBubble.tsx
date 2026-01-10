import { Message } from "@/types/message";
import { UserBadge } from "./UserBadge";

export function MessageBubble({ message }: { message: Message }) {
  return (
    <div className="py-1">
      <UserBadge userId={message.authorId} />{" "}
      <span>{message.body}</span>
    </div>
  );
}