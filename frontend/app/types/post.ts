// Gönderi tip tanımları
export interface Post {
  id: number;
  userId: number;
  user: User;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePostData {
  caption: string;
  imageUrl: string;
}