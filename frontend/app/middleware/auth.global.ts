// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
  // Initialize auth state on client side
  if (process.client) {
    const { initializeAuth } = useAuth();
    initializeAuth();
  }

  // Check if route requires authentication
  if (to.meta.requiresAuth) {
    const { user } = useAuth();
    
    if (!user.value) {
      // Redirect to login if not authenticated
      return navigateTo('/login');
    }
  }
  
  // If user is logged in and trying to access login/register pages, redirect to home
  if (to.path === '/login' || to.path === '/register') {
    const { user } = useAuth();
    if (user.value) {
      return navigateTo('/');
    }
  }
});