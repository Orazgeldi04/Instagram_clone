<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Profile Header -->
    <div class="bg-white border-b border-gray-300">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
          <!-- Profile Picture -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 rounded-full bg-gray-200 border-2 border-white shadow-md overflow-hidden">
              <img
                v-if="user?.profile_pic"
                :src="user.profile_pic"
                :alt="`${user.name}'s profile`"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500 text-2xl">{{ getInitials(user?.name || '') }}</span>
              </div>
            </div>
          </div>

          <!-- Profile Info -->
          <div class="flex-1 w-full">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 class="text-2xl font-light">{{ user?.name }}</h1>
                <p class="text-gray-600">@{{ user?.username }}</p>
              </div>
              
              <div class="flex gap-2">
                <button 
                  @click="showEditModal = true"
                  class="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50"
                >
                  Edit Profile
                </button>
                <button class="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                  Share Profile
                </button>
                <button class="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                  ...
                </button>
              </div>
            </div>

            <!-- Stats -->
            <div class="flex gap-6 mt-4">
              <div>
                <span class="font-semibold">{{ user?.postsCount || 0 }}</span> posts
              </div>
              <div>
                <span class="font-semibold">{{ user?.followersCount || 0 }}</span> followers
              </div>
              <div>
                <span class="font-semibold">{{ user?.followingCount || 0 }}</span> following
              </div>
            </div>

            <!-- Bio -->
            <div v-if="user?.bio" class="mt-3">
              <p class="font-medium">{{ user.name }}</p>
              <p>{{ user.bio }}</p>
            </div>
            
            <!-- Birthday if available -->
            <div v-if="user?.birth_day && user?.birth_month && user?.birth_year" class="mt-2 text-gray-600">
              Born: {{ user.birth_day }}/{{ user.birth_month }}/{{ user.birth_year }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="bg-white border-b border-gray-300">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex justify-center border-t border-gray-300">
          <button 
            class="py-4 px-6 text-xs font-semibold border-t border-transparent -mt-px"
            :class="{ 'border-t-black text-black': activeTab === 'posts' }"
            @click="activeTab = 'posts'"
          >
            POSTS
          </button>
          <button 
            class="py-4 px-6 text-xs font-semibold border-t border-transparent -mt-px"
            :class="{ 'border-t-black text-black': activeTab === 'reels' }"
            @click="activeTab = 'reels'"
          >
            REELS
          </button>
          <button 
            class="py-4 px-6 text-xs font-semibold border-t border-transparent -mt-px"
            :class="{ 'border-t-black text-black': activeTab === 'tagged' }"
            @click="activeTab = 'tagged'"
          >
            TAGGED
          </button>
        </div>
      </div>
    </div>

    <!-- Posts Grid -->
    <div class="max-w-4xl mx-auto px-4 py-6">
      <div class="grid grid-cols-3 gap-1 md:gap-4">
        <div 
          v-for="post in posts" 
          :key="post.id"
          class="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90"
        >
          <img 
            :src="post.image" 
            :alt="post.caption" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <Teleport to="body">
      <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <EditProfileModal 
          :user="user!" 
          @close="showEditModal = false"
          @update="handleProfileUpdate"
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EditProfileModal from '~/components/EditProfileModal.vue';
import type { User } from '~/types/user';

const { getMe } = useApi();
const user = ref<User | null>(null);
const showEditModal = ref(false);
const activeTab = ref('posts');

// Mock posts data - in a real app, this would come from an API
const posts = ref([
  { id: 1, image: 'https://picsum.photos/300/300?random=1', caption: 'Beautiful sunset' },
  { id: 2, image: 'https://picsum.photos/300/300?random=2', caption: 'Morning coffee' },
  { id: 3, image: 'https://picsum.photos/300/300?random=3', caption: 'Nature walk' },
  { id: 4, image: 'https://picsum.photos/300/300?random=4', caption: 'Book reading' },
  { id: 5, image: 'https://picsum.photos/300/300?random=5', caption: 'City view' },
  { id: 6, image: 'https://picsum.photos/300/300?random=6', caption: 'Food time' },
]);

onMounted(async () => {
  try {
    user.value = await getMe();
  } catch (error) {
    console.error('Failed to load profile:', error);
  }
});

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const handleProfileUpdate = (updatedUser: User) => {
  user.value = updatedUser;
  showEditModal.value = false;
};
</script>