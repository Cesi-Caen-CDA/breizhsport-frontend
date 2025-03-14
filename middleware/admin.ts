export default defineNuxtRouteMiddleware((to, from) => {
  const isAdmin = false; // Replace with actual admin check logic
  if (!isAdmin) {
    return navigateTo('/');
  }
});
