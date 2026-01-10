import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";

@Controller("messages")
export class MessagesController {
  constructor(private messages: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Get(":roomId")
  getMessages(@Param("roomId") roomId: string) {
    return this.messages.getRoomMessages(roomId);
  }
}