<template>
  <div class="auth-container">
    <h2>Inscription</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <input v-model="user.firstname" type="text" placeholder="Prénom" required />
        <p v-if="errors.firstname" class="error">{{ errors.firstname }}</p>
      </div>

      <div class="form-group">
        <input v-model="user.lastname" type="text" placeholder="Nom" required />
        <p v-if="errors.lastname" class="error">{{ errors.lastname }}</p>
      </div>

      <div class="form-group">
        <input v-model="user.email" type="email" placeholder="Email" required />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <input v-model="user.password" type="password" placeholder="Mot de passe" required />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <div class="form-group">
        <input v-model="confirmPassword" type="password" placeholder="Confirmer le mot de passe" required />
        <p v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</p>
      </div>

      <button type="submit">S'inscrire</button>

      <!-- Affichage des erreurs générales -->
      <p v-if="errors.general" class="error-general">{{ errors.general }}</p>
    </form>

    <p>Déjà un compte ? <NuxtLink to="/signin">Se connecter</NuxtLink></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore"; // 🔹 Importation du store

const router = useRouter();
const authStore = useAuthStore(); // 🔹 Initialisation de Pinia

const user = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});
const confirmPassword = ref("");
const errors = ref({});

const registerUser = async () => {
  errors.value = {};

  if (user.value.password !== confirmPassword.value) {
    errors.value.confirmPassword = "Les mots de passe ne correspondent pas.";
    return;
  }

  try {
    const response = await $fetch("http://localhost:8000/users", {
      method: "POST",
      body: user.value,
    });

    if (response.token) {
      authStore.login(response.token); // 🔹 Met à jour Pinia avec le token
      router.push("/"); // Redirige vers l'accueil
    }
  } catch (error) {
    console.error("Erreur API :", error);

    if (error.data && error.data.errors) {
      errors.value = error.data.errors;
    } else {
      errors.value.general = "Une erreur inconnue s'est produite.";
    }
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
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.error-box {
  margin-top: 10px;
  background: #ffebee;
  color: #d32f2f;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
}

.error {
  margin: 5px 0;
}

.error-general {
  color: red;
}
</style>
