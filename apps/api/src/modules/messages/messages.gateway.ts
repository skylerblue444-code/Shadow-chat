import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { MessagesService } from "./messages.service";
import { JwtService } from "@nestjs/jwt";

@WebSocketGateway({ cors: true })
export class MessagesGateway {
  constructor(
    private messages: MessagesService,
    private jwt: JwtService
  ) {}

  handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth?.token;
      const payload = this.jwt.verify(token);
      (client as any).userId = payload.sub;
    } catch {
      client.disconnect();
    }
  }

  @SubscribeMessage("joinRoom")
  joinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() roomId: string
  ) {
    client.join(roomId);
  }

  @SubscribeMessage("sendMessage")
  async sendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: string; content: string }
  ) {
    const msg = await this.messages.saveMessage(
      data.roomId,
      (client as any).userId,
      data.content
    );

    client.to(data.roomId).emit("newMessage", msg);
    return msg;
  }
}