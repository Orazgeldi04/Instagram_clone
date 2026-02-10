// composables/useAuth.ts
import type { User, RegisterData, AuthResponse, AuthCredentials } from '~/types/auth';

// Rename LoginData to LoginCredentials to avoid confusion
type LoginCredentials = AuthCredentials;

export const useAuth = () => {
  const user = useState<User | null>('auth-user', () => null);
  const token = useState<string | null>('auth-token', () => null);

  const register = async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await $fetch<AuthResponse>('/api/register', {
        method: 'POST',
        body: data
      });
      
      return response;
    } catch (error: any) {
      console.error('Registration error:', error);
      return {
        success: false,
        message: error.data?.message || 'Kayıt işlemi sırasında bir hata oluştu'
      };
    }
  };

  const login = async (data: LoginCredentials): Promise<AuthResponse> => {
    try {
      // Prepare data for backend - assuming backend expects 'email' field
      // In a real app, you might need to adjust this based on your backend API
      const loginData = {
        email: data.contact, // Map contact to email for backend compatibility
        password: data.password
      };
      
      const response = await $fetch<AuthResponse>('/api/login', {
        method: 'POST',
        body: loginData
      });
      
      if (response.success && response.user && response.token) {
        user.value = response.user;
        token.value = response.token;
        
        // Store token in localStorage for persistence
        if (process.client) {
          localStorage.setItem('auth-token', response.token);
          localStorage.setItem('auth-user', JSON.stringify(response.user));
        }
      }
      
      return response;
    } catch (error: any) {
      console.error('Login error:', error);
      return {
        success: false,
        message: error.data?.message || 'Giriş işlemi sırasında bir hata oluştu'
      };
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    
    if (process.client) {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-user');
    }
  };

  const initializeAuth = () => {
    if (process.client) {
      const storedToken = localStorage.getItem('auth-token');
      const storedUser = localStorage.getItem('auth-user');
      
      if (storedToken && storedUser) {
        token.value = storedToken;
        user.value = JSON.parse(storedUser);
      }
    }
  };

  return {
    user,
    token,
    register,
    login,
    logout,
    initializeAuth
  };
};