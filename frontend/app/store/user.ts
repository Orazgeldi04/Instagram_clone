import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth',() => {
  const config = useRuntimeConfig()
  const logIn = async (email:string , password:string): Promise<void> => {
    const { data, error } = await useFetch(`${config.public.apiBase}/api/login`, {
    method: 'POST',
    body: {
      email: email,
      password: password
    }
  })

  if (error.value) {
    console.log('Error:', error.value)
    return
  }

  console.log('Success:', data.value)
  }

  return{
    logIn
  }
})