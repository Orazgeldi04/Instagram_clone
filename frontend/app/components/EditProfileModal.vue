<template>
  <div class="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold">Edit Profile</h2>
      <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="p-4 space-y-4">
      <!-- Profile Picture -->
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-2">
          <img
            v-if="form.profile_pic"
            :src="form.profile_pic"
            alt="Profile"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500 text-xl">{{ getInitials(form.name) }}</span>
          </div>
        </div>
        <label class="text-blue-500 cursor-pointer hover:text-blue-700 text-sm">
          Change Photo
          <input
            type="text"
            v-model="form.profile_pic"
            placeholder="Enter image URL"
            class="hidden"
          />
        </label>
      </div>

      <!-- Profile Picture URL -->
      <div>
        <label class="block text-sm font-medium mb-1">Profile Picture URL</label>
        <input
          type="url"
          v-model="form.profile_pic"
          placeholder="https://example.com/image.jpg"
          class="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <!-- Name -->
      <div>
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          v-model="form.name"
          class="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <!-- Username -->
      <div>
        <label class="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          v-model="form.username"
          class="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          v-model="form.email"
          class="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <!-- Bio -->
      <div>
        <label class="block text-sm font-medium mb-1">Bio</label>
        <textarea
          v-model="form.bio"
          rows="3"
          class="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        ></textarea>
      </div>

      <!-- Birthday -->
      <div>
        <label class="block text-sm font-medium mb-1">Birthday</label>
        <div class="grid grid-cols-3 gap-2">
          <input
            type="number"
            v-model.number="form.birth_day"
            placeholder="Day"
            min="1"
            max="31"
            class="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="number"
            v-model.number="form.birth_month"
            placeholder="Month"
            min="1"
            max="12"
            class="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="number"
            v-model.number="form.birth_year"
            placeholder="Year"
            min="1900"
            :max="new Date().getFullYear()"
            class="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="text-red-500 text-sm py-2">
        {{ errorMessage }}
      </div>

      <!-- Buttons -->
      <div class="flex gap-2 pt-4">
        <button
          type="button"
          @click="$emit('close')"
          class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          :disabled="submitting"
          class="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded transition"
        >
          {{ submitting ? 'Saving...' : 'Save' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { User } from '~/types/user';
import type { UpdateUserPayload } from '~/composables/useApi';

const props = defineProps<{
  user: User;
}>();

const emit = defineEmits<{
  close: [];
  update: [user: User];
}>();

const { updateMe } = useApi();

const form = reactive<UpdateUserPayload>({
  name: props.user.name,
  username: props.user.username,
  email: props.user.email,
  profile_pic: props.user.profile_pic || '',
  bio: props.user.bio || '',
  birth_day: props.user.birth_day || undefined,
  birth_month: props.user.birth_month || undefined,
  birth_year: props.user.birth_year || undefined,
});

const submitting = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  try {
    submitting.value = true;
    errorMessage.value = '';

    const payload: UpdateUserPayload = {};

    if (form.name !== props.user.name) payload.name = form.name;
    if (form.username !== props.user.username) payload.username = form.username;
    if (form.email !== props.user.email) payload.email = form.email;
    if (form.profile_pic !== props.user.profile_pic) payload.profile_pic = form.profile_pic || null;
    if (form.bio !== props.user.bio) payload.bio = form.bio || null;
    if (form.birth_day !== props.user.birth_day) payload.birth_day = form.birth_day;
    if (form.birth_month !== props.user.birth_month) payload.birth_month = form.birth_month;
    if (form.birth_year !== props.user.birth_year) payload.birth_year = form.birth_year;

    const updatedUser = await updateMe(payload);
    emit('update', updatedUser);
  } catch (err: any) {
    errorMessage.value = err.data?.message || 'Failed to update profile';
    console.error('Update profile error:', err);
  } finally {
    submitting.value = false;
  }
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};
</script>