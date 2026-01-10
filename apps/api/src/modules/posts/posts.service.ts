import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(authorId: string, content: string) {
    return this.prisma.post.create({
      data: { authorId, content },
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });
  }
}