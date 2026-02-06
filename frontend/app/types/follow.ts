// Takip tip tanımları
export interface Follow {
  id: number;
  followerId: number;
  followingId: number;
  createdAt: Date;
}

export interface FollowData {
  followingId: number;
}