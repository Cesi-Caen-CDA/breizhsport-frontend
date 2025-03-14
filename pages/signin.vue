<template>
  <div class="auth-container">
    <h2>Connexion</h2>
    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button
        type="submit"
        class="v-btn v-btn--block v-btn--elevated v-theme--light bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"
      >
        Se connecter
      </button>
    </form>
    <p>Pas encore inscrit ? <NuxtLink to="/signup">Créer un compte</NuxtLink></p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore"; // Assurez-vous que le chemin est correct

const router = useRouter();
const authStore = useAuthStore(); // 🔹 Initialisation de Pinia ici

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const loginUser = async () => {
  try {
    const response = await $fetch("http://localhost:8000/auth/login", {
      method: "POST",
      body: { email: email.value, password: password.value },
    });

    if (response.token) {
      authStore.login(response.token); // 🔹 Utilisation correcte de `authStore`
      router.push("/"); // Redirige vers l'accueil
    }
  } catch (error) {
    console.log(error);
    errorMessage.value = "Échec de la connexion. Vérifiez votre email et mot de passe.";
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background: white;
}
input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}
button {
  width: 100%;
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #218838;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
