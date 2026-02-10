export interface User {
  id: number;
  username: string;
  email?: string;
  fullName: string;
  bio?: string;
  avatar?: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isVerified: boolean;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterData {
  name: string;
  username: string;
  email: string;
  password: string;
  profile_pic?: string;
  bio?: string;
  birth_day: number;
  birth_month: number;
  birth_year: number;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
}

export interface ForgotPasswordData {
  contact: string;
}

export interface ResetPasswordData {
  token: string;
  newPassword: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface ValidateTokenResponse {
  isValid: boolean;
  message?: string;
}

export interface FormData {
  email: string;
  password: string;
  birthDay: string | number;
  birthMonth: string | number;
  birthYear: string | number;
  name: string;
  username: string;
  profile_pic: string;
  bio: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  birthDate?: string;
  name?: string;
  username?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}