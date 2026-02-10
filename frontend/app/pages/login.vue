<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="bg-white py-8 px-10 border border-gray-300">
        <!-- Logo -->
        <div class="text-center mb-8">
          <h1 class="text-5xl font-serif italic">Instagram</h1>
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">
          {{ errorMessage }}
        </div>

        <!-- Login Form -->
        <form class="space-y-4" @submit.prevent="handleLogin">
          <div>
            <input
              id="email"
              v-model="formData.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="Telefon numarası, e-posta veya kullanıcı adı"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm text-xs placeholder-gray-500 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <input
              id="password"
              v-model="formData.password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              placeholder="Şifre"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm text-xs placeholder-gray-500 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
            >
              {{ loading ? 'Giriş Yapılıyor...' : 'Giriş Yap' }}
            </button>
          </div>
        </form>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500 font-semibold">
              YA DA
            </span>
          </div>
        </div>

        <div class="space-y-2 mb-4">
          <button
            type="button"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
            </svg>
            Facebook ile Giriş Yap
          </button>
        </div>
      </div>

      <!-- Forgot Password and Sign Up Links -->
      <div class="bg-white py-4 px-10 border border-gray-300 mt-3 text-center">
        <p class="text-sm">
          Şifreni mi unuttun?
          <a href="#" class="text-blue-500 font-semibold hover:text-blue-700">
            Şifreyi Sıfırla
          </a>
        </p>
      </div>

      <div class="bg-white py-4 px-10 border border-gray-300 mt-3 text-center">
        <p class="text-sm">
          Hesabın yok mu?
          <NuxtLink to="/register" class="text-blue-500 font-semibold hover:text-blue-700">
            Kaydol
          </NuxtLink>
        </p>
      </div>

      <!-- Get the app -->
      <div class="mt-6 text-center">
        <p class="text-sm mb-4">Uygulamayı indir.</p>
        <div class="flex justify-center gap-2">
          <a href="#" class="inline-block">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/109e9f6e53ab.png"
              alt="App Store'dan indir"
              class="h-10"
            />
          </a>
          <a href="#" class="inline-block">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/8e890418f684.png"
              alt="Google Play'den indir"
              class="h-10"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 text-center">
      <div class="text-xs text-gray-500 space-x-3 mb-3">
        <a href="#" class="hover:underline">Meta</a>
        <a href="#" class="hover:underline">Hakkında</a>
        <a href="#" class="hover:underline">Blog</a>
        <a href="#" class="hover:underline">İş Fırsatları</a>
        <a href="#" class="hover:underline">Yardım</a>
        <a href="#" class="hover:underline">API</a>
        <a href="#" class="hover:underline">Gizlilik</a>
        <a href="#" class="hover:underline">Şartlar</a>
      </div>
      <p class="text-xs text-gray-500">© 2024 Instagram from Meta</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';

interface FormData {
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  user?: any;
  token?: string;
}

const formData = reactive<FormData>({
  email: '',
  password: ''
});

const loading = ref(false);
const errorMessage = ref('');
const { login } = useAuth();

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const response: AuthResponse = await login(formData);

    if (response.success) {
      // Login successful
      await navigateTo('/');
    } else {
      // Handle error response from backend
      errorMessage.value = response.message;
      console.error('Login error:', response.message);
    }
  } catch (error: any) {
    console.error('Giriş hatası:', error);
    errorMessage.value = 'Giriş sırasında bir hata oluştu';
  } finally {
    loading.value = false;
  }
};

definePageMeta({
  layout: 'auth'
});
</script>