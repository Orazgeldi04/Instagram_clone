export default defineEventHandler(() => {
  // In a real implementation, you would verify the JWT token and return user info
  // For now, returning mock data
  return {
    id: 1,
    email: 'user@example.com',
    fullname: 'Test User',
    username: 'testuser',
    avatar: null
  };
});