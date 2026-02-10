<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-lg">

      <button 
        @click="goBack"
        class=" text-white hover:text-gray-300 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700">
        <div class="mb-2 mt-2">
          <svg class="w-16 h-5" viewBox="0 0 80 20" fill="white">
            <text x="0" y="15" font-family="Arial" font-size="24" font-weight="bold">Meta</text>
          </svg>
        </div>

        <h1 class="text-2xl font-semibold text-white mb-2">
          Get started on Instagram
        </h1>
        <p class="text-gray-400 text-lg mb-2">
          Sign up to see photos and videos from your friends.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-white text-lg font-medium mb-2">
              Email address
            </label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email address"
              class="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 text-md rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="mt-1 text-md text-red-500">{{ errors.email }}</p>
          </div>

          <div class="relative">
            <label class="block text-white text-lg font-medium mb-2">
              Password
            </label>
            <input
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              class="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 focus:border-gray-400 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors pr-12"
              :class="{ 'border-red-500': errors.password }"
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
            >
              <svg 
                v-if="showPassword" 
                class="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg 
                v-else 
                class="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
            <p v-if="errors.password" class="mt-1 text-md text-red-500">{{ errors.password }}</p>
          </div>

          <div>
            <label class="flex items-center text-white text-lg font-medium mb-2">
              Date of birth
              <svg class="w-4 h-4 ml-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </label>
            <div class="grid grid-cols-3 gap-3">
              <select
                v-model="formData.birthDay"
                class="px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white focus:outline-none  transition-colors appearance-none cursor-pointer"
                :class="{ 'border-red-500': errors.birthDate }"
              >
                <option value="" disabled>Day</option>
                <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
              </select>
              <select
                v-model="formData.birthMonth"
                class="px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white focus:outline-none  transition-colors appearance-none cursor-pointer"
                :class="{ 'border-red-500': errors.birthDate }"
              >
                <option value="" disabled>Month</option>
                <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
              </select>
              <select
                v-model="formData.birthYear"
                class="px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white focus:outline-none  transition-colors appearance-none cursor-pointer"
                :class="{ 'border-red-500': errors.birthDate }"
              >
                <option value="" disabled>Year</option>
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
            <p v-if="errors.birthDate" class="mt-1 text-md text-red-500">{{ errors.birthDate }}</p>
          </div>

          <div>
            <label class="block text-white text-lg font-medium mb-2">
              Full Name
            </label>
            <input
              v-model="formData.name"
              type="text"
              placeholder="Full name"
              class="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none  transition-colors"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="mt-1 text-md text-red-500">{{ errors.name }}</p>
          </div>

          <div>
            <label class="block text-white text-lg font-medium mb-2">
              Username
            </label>
            <input
              v-model="formData.username"
              type="text"
              placeholder="Username"
              class="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none  transition-colors"
              :class="{ 'border-red-500': errors.username }"
            />
            <p v-if="errors.username" class="mt-1 text-md text-red-500">{{ errors.username }}</p>
          </div>

          <div>
            <label class="block text-white text-lg font-medium mb-2">
              Profile Picture URL
            </label>
            <input
              v-model="formData.profile_pic"
              type="text"
              placeholder="Profile picture URL (optional)"
              class="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none  transition-colors"
            />
          </div>

          <div>
            <label class="block text-white text-lg font-medium mb-2">
              Bio
            </label>
            <input
              v-model="formData.bio"
              type="text"
              placeholder="Bio (optional)"
              class="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none  transition-colors"
            />
          </div>

          <div class="pt-4 border-t border-gray-700">
            <p class="text-md text-gray-400">
              People who use our service may have uploaded your contact information to Instagram.
              <a href="#" class="text-blue-400 hover:text-blue-300">Learn more</a>
            </p>

            <p class="text-md text-gray-400 mt-2">
              By tapping Submit, you agree to create an account and to Instagram's
              <a href="#" class="text-blue-400 hover:text-blue-300">Terms</a>,
              <a href="#" class="text-blue-400 hover:text-blue-300">Privacy Policy</a> and
              <a href="#" class="text-blue-400 hover:text-blue-300">Cookies Policy</a>.
            </p>

            <p class="text-md text-gray-400 mt-2">
              The <a href="#" class="text-blue-400 hover:text-blue-300">Privacy Policy</a> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads.
            </p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? 'Submitting...' : 'Submit' }}
          </button>

          <div v-if="successMessage" class="p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-lg">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="p-3 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-lg">
            {{ errorMessage }}
          </div>

          <button
            type="button"
            @click="goToLogin"
            class="w-full py-4 border border-gray-600 text-white font-medium rounded-xl hover:bg-gray-700/50 transition-colors"
          >
            I already have an account
          </button>
        </form>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-3 text-md text-gray-500">
        <a href="#" class="hover:text-gray-400">Meta</a>
        <a href="#" class="hover:text-gray-400">About</a>
        <a href="#" class="hover:text-gray-400">Blog</a>
        <a href="#" class="hover:text-gray-400">Jobs</a>
        <a href="#" class="hover:text-gray-400">Help</a>
        <a href="#" class="hover:text-gray-400">API</a>
        <a href="#" class="hover:text-gray-400">Privacy</a>
        <a href="#" class="hover:text-gray-400">Terms</a>
        <a href="#" class="hover:text-gray-400">Locations</a>
        <a href="#" class="hover:text-gray-400">Instagram Lite</a>
        <a href="#" class="hover:text-gray-400">Contact uploading and non-users</a>
        <a href="#" class="hover:text-gray-400">Meta Verified</a>
      </div>

      <div class="mt-4 text-center text-md text-gray-500">
        <span>English (UK)</span>
        <span class="mx-2">•</span>
        <span>© 2025 Instagram from Meta</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormData, ValidationErrors, RegisterData, AuthResponse } from '~/types/auth'

const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
  try {
    const response = await $fetch<AuthResponse>('/api/auth/register', {
      method: 'POST',
      body: data
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: error.data?.message || 'Registration failed. Please try again.'
    };
  }
};

const formData = ref<FormData>({
  email: '',
  password: '',
  birthDay: '',
  birthMonth: '',
  birthYear: '',
  name: '',
  username: '',
  profile_pic: '',
  bio: ''
})

const errors = ref<ValidationErrors>({})
const loading = ref(false)
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
const successMessage = ref('')
const errorMessage = ref('')

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const years = computed(() => {
  const currentYear = new Date().getFullYear()
  const minYear = currentYear - 100
  const maxYear = currentYear - 13 
  const yearList = []
  for (let i = maxYear; i >= minYear; i--) {
    yearList.push(i)
  }
  return yearList
})

const validateForm = (): boolean => {
  errors.value = {}
  let isValid = true

  if (!formData.value.email) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = 'Please enter a valid email'
    isValid = false
  }

  if (!formData.value.password) {
    errors.value.password = 'Password is required'
    isValid = false
  } else if (formData.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
    isValid = false
  }

  if (!formData.value.birthDay || !formData.value.birthMonth || !formData.value.birthYear) {
    errors.value.birthDate = 'Please select your complete date of birth'
    isValid = false
  } else {
    const birthDate = new Date(
      Number(formData.value.birthYear),
      Number(formData.value.birthMonth) - 1,
      Number(formData.value.birthDay)
    );

    if (isNaN(birthDate.getTime()) ||
        birthDate.getFullYear() !== Number(formData.value.birthYear) ||
        birthDate.getMonth() !== Number(formData.value.birthMonth) - 1 ||
        birthDate.getDate() !== Number(formData.value.birthDay)) {
      errors.value.birthDate = 'Please select a valid date';
      isValid = false;
    } else {
      const today = new Date();
      const minAgeDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());

      if (birthDate > minAgeDate) {
        errors.value.birthDate = 'You must be at least 13 years old to register';
        isValid = false;
      }
    }
  }

  if (!formData.value.name) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!formData.value.username) {
    errors.value.username = 'Username is required'
    isValid = false
  } else if (formData.value.username.length < 3) {
    errors.value.username = 'Username must be at least 3 characters'
    isValid = false
  } else if (!/^[a-zA-Z0-9._]+$/.test(formData.value.username)) {
    errors.value.username = 'Username can only contain letters, numbers, periods, and underscores'
    isValid = false
  }

  return isValid
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!validateForm()) {
    return
  }

  loading.value = true

  try {
    const registerData: RegisterData = {
      name: formData.value.name,
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password,
      profile_pic: formData.value.profile_pic,
      bio: formData.value.bio,
      birth_day: Number(formData.value.birthDay),
      birth_month: Number(formData.value.birthMonth),
      birth_year: Number(formData.value.birthYear)
    };

    const response = await registerUser(registerData)

    if (response?.success) {
      successMessage.value = 'Account created successfully! Redirecting...'

      formData.value = {
        email: '',
        password: '',
        birthDay: '',  
        birthMonth: '', 
        birthYear: '', 
        name: '',
        username: '',
        profile_pic: '',
        bio: ''
      }

      setTimeout(() => {
        navigateTo('/')
      }, 2000)
    } else {
      errorMessage.value = response?.message || 'Registration failed. Please try again.'
    }
  } catch (error) {
    console.error('Registration error:', error)
    errorMessage.value = error?.message || 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  navigateTo('/')
}

const goToLogin = () => {
  navigateTo('/login')
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>