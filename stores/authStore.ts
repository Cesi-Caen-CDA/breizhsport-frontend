import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);

  // Vérifier si localStorage est disponible (uniquement côté client)
  onMounted(() => {
    if (typeof window !== "undefined") {
      isAuthenticated.value = !!localStorage.getItem("token");
    }
  });

  const login = (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      isAuthenticated.value = true;
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      isAuthenticated.value = false;
    }
  };

  return { isAuthenticated, login, logout };
});
