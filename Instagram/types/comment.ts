// Yorum tip tanımları
export interface Comment {
  id: number;
  postId: number;
  userId: number;
  user: User;
  content: string;
  likesCount: number;
  isLiked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCommentData {
  content: string;
}