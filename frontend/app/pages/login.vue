<template>

  <div class=" h-screen w-screen ">
    <header class=" flex border-b-2 border-gray-600 h-13/15">
      <section class=" left-side p-10 w-3/5">
      <img src="/instagram.png" class=" scale-120"/>
      <p class=" mt-5 text-white text-center text-[40px] leading-16">See everyday moments from your <span class=" block bg-gradient-to-r from-yellow-500 from-20% via-red-500 to-pink-500 to-60%  bg-clip-text text-transparent">close friends</span></p>
      <div class=" w-full px-30">
        <img src="/nWfBjz-5_uf.png"  alt="">
      </div>
    </section>
    <section class="right-side w-2/5 border-l-2 border-gray-600 flex flex-col justify-center pb-15">
      <div class=" p-15 space-y-10">
        <section class="flex items-center text-white space-x-3">
          <button class="text-3xl rounded-full w-10 h-10 hover:bg-white/20 pb-2.5">&lt;</button>
          <p class="text-lg cursor-default">Log into instagram</p>
        </section>
        <section class=" text-white flex flex-col gap-y-3">
          <input v-model="email" type="text"  placeholder="email" class=" border border-gray-600 hover:border-gray-400 px-4 pb-4.5 pt-3 rounded-xl">
          <input v-model="password" type="text" placeholder="Password" class=" border border-gray-600 hover:border-gray-400 px-4 pb-4.5 pt-3 rounded-xl">
          <button class=" bg-sky-700 py-3 rounded-full mt-2 active:opacity-80" @click="auth.logIn(email,password)">Log in</button>
        </section>
        <section class=" flex flex-col">
          <NuxtLink to="/register">
            <button class=" w-full text-sky-500 border p-3 rounded-full hover:bg-white/10">
            Create new account
          </button>
          </NuxtLink>
          <p class=" flex items-center gap-x-1 justify-center mt-5 cursor-default">
            <Icon name="fa6-brands:meta" class=" text-white"/>
            <span class=" text-white">Meta</span>
          </p>
        </section>
      </div>
    </section>
    </header>
    <section class=" w-full h-2/15 footer text-white/60 text-xs leading-10">
      <div class=" flex justify-center gap-x-4 ">
        <span v-for="value in linked" :key="value" class="  hover:underline cursor-pointer">{{ value }}</span>
      </div>
      <p class=" text-center cursor-default">© 2026 Instagram from Meta</p>
    </section>

  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="bg-white py-8 px-10 border border-gray-300">
        <div class="text-center mb-8">
          <h1 class="text-5xl font-serif italic">Instagram</h1>
        </div>
      

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
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/user';

  const auth = useAuthStore()
  const linked = ['Meta' , 'About' , 'Blog' , 'Jobs' , 'Help' , 'API' , 'Privacy' , 'Terms' , 'Locations' , 'Instagram Lite' , 'Meta AI' , 'Threads' , 'Contact Uploading & Non-Users' , 'Meta Verified']
  const email = ref<string>('')
  const password = ref<string>('')
  
</script>


<style scoped>
  .left-side,.footer{
    background-color: #0C1014;
  }

  .right-side{
    background-color: #152127;
  }

</style>


