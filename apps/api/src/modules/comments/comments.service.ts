import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, postId: string, content: string) {
    return this.prisma.comment.create({
      data: { userId, postId, content },
    });
  }
}