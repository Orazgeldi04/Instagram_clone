// composables/useApi.ts
import type { User } from '~/types/user';
import { transformBackendUserToFrontend } from '~/utils/userUtils';

export interface UpdateUserPayload {
  name?: string;
  username?: string;
  email?: string;
  profile_pic?: string | null;
  bio?: string | null;
  birth_day?: number;
  birth_month?: number;
  birth_year?: number;
}

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export const useApi = () => {
  const token = useState<string | null>('auth-token', () => null);

  const getHeaders = (): Record<string, string> => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (token.value) {
      headers['Authorization'] = `Bearer ${token.value}`;
    }
    
    return headers;
  };

  const getMe = async (): Promise<User> => {
    try {
      const response = await $fetch('/api/users/me', {
        method: 'GET',
        headers: getHeaders(),
      });
      
      return transformBackendUserToFrontend(response);
    } catch (error: any) {
      console.error('GetMe error:', error);
      throw error;
    }
  };

  const getUserById = async (id: number): Promise<User> => {
    try {
      const response = await $fetch(`/api/users/${id}`, {
        method: 'GET',
        headers: getHeaders(),
      });
      
      return transformBackendUserToFrontend(response);
    } catch (error: any) {
      console.error('GetUserById error:', error);
      throw error;
    }
  };

  const updateMe = async (data: UpdateUserPayload): Promise<User> => {
    try {
      const response = await $fetch('/api/users/me', {
        method: 'PATCH',
        headers: getHeaders(),
        body: data,
      });
      
      return transformBackendUserToFrontend(response);
    } catch (error: any) {
      console.error('UpdateMe error:', error);
      throw error;
    }
  };

  const changePassword = async (data: ChangePasswordPayload): Promise<{ message: string }> => {
    try {
      const response = await $fetch('/api/users/me/password', {
        method: 'PATCH',
        headers: getHeaders(),
        body: data,
      });
      
      return response;
    } catch (error: any) {
      console.error('ChangePassword error:', error);
      throw error;
    }
  };

  const deleteMe = async (): Promise<{ message: string }> => {
    try {
      const response = await $fetch('/api/users/me', {
        method: 'DELETE',
        headers: getHeaders(),
      });
      
      return response;
    } catch (error: any) {
      console.error('DeleteMe error:', error);
      throw error;
    }
  };

  return {
    getMe,
    getUserById,
    updateMe,
    changePassword,
    deleteMe,
  };
};