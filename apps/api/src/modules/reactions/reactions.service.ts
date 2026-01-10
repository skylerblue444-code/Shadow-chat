import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class ReactionsService {
  constructor(private prisma: PrismaService) {}

  toggle(userId: string, postId: string) {
    return this.prisma.reaction.upsert({
      where: {
        userId_postId: { userId, postId },
      },
      update: {},
      create: { userId, postId },
    });
  }
}