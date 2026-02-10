<template>
  <div class="profile-card">
  <div class="profile-header">
    <img
      class="avatar"
      src="https://i.pravatar.cc/150?img=32"
      alt="profile"
    />

    <div class="profile-stats">
      <div>
        <strong>128</strong>
        <span>Posts</span>
      </div>
      <div>
        <strong>3.4K</strong>
        <span>Followers</span>
      </div>
      <div>
        <strong>245</strong>
        <span>Following</span>
      </div>
    </div>
  </div>

  <div class="profile-info">
    <strong>han.dev</strong>
    <p>Frontend Developer</p>
  </div>

  <button class="follow-btn">Follow</button>
</div>

</template>

<style scoped>
  body {
  background: #0f0f0f;
  font-family: system-ui, sans-serif;
}

.profile-card {
  width: 620px;
  background: #000;
  color: white;
  border: 1px solid #262626;
  border-radius: 16px;
  padding: 16px;
}

.profile-header {
  display: flex;
  gap: 16px;
  align-items: center;
}

.avatar {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ff006a;
}

.profile-stats {
  display: flex;
  gap: 16px;
}

.profile-stats div {
  text-align: center;
  font-size: 14px;
}

.profile-stats span {
  color: #a8a8a8;
  font-size: 12px;
}

.profile-info {
  margin-top: 12px;
  font-size: 14px;
}

.profile-info p {
  margin: 4px 0 0;
  color: #c7c7c7;
}

.follow-btn {
  margin-top: 14px;
  width: 100%;
  padding: 8px 0;
  border-radius: 9999px;
  border: none;
  background: #0095f6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.follow-btn:hover {
  background: #1877f2;
}

</style>