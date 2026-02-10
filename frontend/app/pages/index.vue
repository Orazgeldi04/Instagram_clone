<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-5xl mx-auto py-8 px-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-serif italic">Hoş Geldiniz!</h1>
        <p class="text-gray-600">Instagram Clone Uygulamasına Hoş Geldiniz</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 class="text-xl font-semibold mb-4">Yeni Gönderiler</h2>
          <p>Bugün ne paylaştın?</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 class="text-xl font-semibold mb-4">Arkadaşların</h2>
          <p>En son kimleri takip ettin?</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 class="text-xl font-semibold mb-4">Popüler</h2>
          <p>Şu anda popüler olanlar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set this route to require authentication
definePageMeta({
  layout: 'default',
  requiresAuth: true
});
</script>