export type ReactionType = "LIKE" | "LAUGH" | "FIRE";

export interface Reaction {
  id: string;
  postId: string;
  type: ReactionType;
}