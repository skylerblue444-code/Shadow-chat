import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";

@Controller("comments")
export class CommentsController {
  constructor(private comments: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req: any,
    @Body("postId") postId: string,
    @Body("content") content: string
  ) {
    return this.comments.create(req.user.sub, postId, content);
  }
}