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


// post. api/auth/login
//email , password