// utils/userUtils.ts
import type { User } from '~/types/user';

export const transformBackendUserToFrontend = (backendUser: any): User => {
  return {
    id: backendUser.id,
    name: backendUser.name,
    username: backendUser.username,
    email: backendUser.email,
    profile_pic: backendUser.profile_pic,
    bio: backendUser.bio,
    birth_day: backendUser.birth_day,
    birth_month: backendUser.birth_month,
    birth_year: backendUser.birth_year,
    created_at: backendUser.created_at,
    updated_at: backendUser.updated_at,
    deleted_at: backendUser.deleted_at,
    postsCount: backendUser.postsCount || 0,
    followersCount: backendUser.followersCount || 0,
    followingCount: backendUser.followingCount || 0,
  };
};