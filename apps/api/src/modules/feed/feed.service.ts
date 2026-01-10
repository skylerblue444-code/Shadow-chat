import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  getFeed() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
        comments: true,
        reactions: true,
      },
    });
  }
}