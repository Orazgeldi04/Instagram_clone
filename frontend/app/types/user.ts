// Kullanıcı tip tanımları
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  profile_pic?: string | null;
  bio?: string | null;
  birth_day?: number | null;
  birth_month?: number | null;
  birth_year?: number | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  deleted_at?: string | null; // ISO date string
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
}

export interface UserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  profile_pic?: string | null;
  bio?: string | null;
  birth_day?: number | null;
  birth_month?: number | null;
  birth_year?: number | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  deleted_at?: string | null; // ISO date string
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
}