import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  createRoom(userIds: string[]) {
    return this.prisma.messageRoom.create({
      data: {
        participants: {
          connect: userIds.map(id => ({ id })),
        },
      },
    });
  }

  saveMessage(roomId: string, senderId: string, content: string) {
    return this.prisma.message.create({
      data: { roomId, senderId, content },
    });
  }

  getRoomMessages(roomId: string) {
    return this.prisma.message.findMany({
      where: { roomId },
      orderBy: { createdAt: "asc" },
    });
  }
}