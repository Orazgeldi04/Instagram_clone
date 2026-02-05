// Bildirim tip tanımları
export interface Notification {
  id: number;
  userId: number;
  type: 'like' | 'comment' | 'follow' | 'mention';
  content: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}