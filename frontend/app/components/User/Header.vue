<template>
  <div class="profile-header">
  <img
    class="avatar"
    src="https://i.pravatar.cc/150?img=12"
    alt="profile avatar"
  />
  <span class="username">han.dev</span>
</div>

</template>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ff006a; /* story ring style */
}

.username {
  color: white;
  font-size: 16px;
  font-weight: 600;
}
</style>