
<script setup lang="ts">
interface User {
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

interface AuthCredentials {
  contact: string; // email or phone
  password: string;
}

interface RegisterData extends AuthCredentials {
  fullName: string;
  username: string;
  birthDate: string; // Format: YYYY-MM-DD
}

interface LoginResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}

interface RegisterResponse {
  success: boolean;
  message?: string;
}

interface ForgotPasswordData {
  contact: string; // email or phone
}

interface ResetPasswordData {
  token: string;
  newPassword: string;
}

interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

interface ValidateTokenResponse {
  isValid: boolean;
  message?: string;
}

defineExpose({
  User,
  AuthCredentials,
  RegisterData,
  LoginResponse,
  RegisterResponse,
  ForgotPasswordData,
  ResetPasswordData,
  ChangePasswordData,
  ValidateTokenResponse
})
</script>

<template>
  <!-- This component doesn't render anything -->
  <div></div>
</template>

<style scoped>
/* No styles needed for type definitions */
</style>