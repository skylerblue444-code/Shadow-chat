import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";

@Controller("posts")
export class PostsController {
  constructor(private posts: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body("content") content: string) {
    return this.posts.create(req.user.sub, content);
  }

  @Get()
  findAll() {
    return this.posts.findAll();
  }
}