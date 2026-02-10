<template>
  <div class="default-layout">
    <!-- Header could go here -->
    <!-- <header v-if="$route.path !== '/'" class="bg-white border-b border-gray-300 py-3 px-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-serif italic">Instagram</NuxtLink>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/">Ana Sayfa</NuxtLink>
          <button @click="handleLogout" class="text-sm bg-red-500 text-white px-3 py-1 rounded">Çıkış</button>
        </div>
      </div>
    </header> -->
    
    <main>
      <slot />
    </main>
    
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth';

const { logout } = useAuth();

const handleLogout = () => {
  logout();
  navigateTo('/login');
};
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
}
</style>