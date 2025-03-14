<template>
  <div class="container">
    <h2>Mon Profil</h2>

    <p v-if="!isAuthenticated" class="error">Vous devez être connecté pour voir votre profil.</p>

    <div v-if="isAuthenticated">
      <div class="profile-info">
        <p><strong>Prénom :</strong> {{ user.firstname }}</p>
        <p><strong>Nom :</strong> {{ user.lastname }}</p>
        <p><strong>Email :</strong> {{ user.email }}</p>
      </div>

      <div class="profile-form">
        <h3>Modifier mon profil</h3>
        <form @submit.prevent="updateProfile">
          <input v-model="user.firstname" type="text" placeholder="Prénom" required />
          <input v-model="user.lastname" type="text" placeholder="Nom" required />

          <!-- 🔹 Email non modifiable -->
          <input v-model="user.email" type="email" placeholder="Email" disabled />

          <!-- 🔹 Modification du mot de passe -->
          <input v-model="password" type="password" placeholder="Nouveau mot de passe" />
          <input v-model="confirmPassword" type="password" placeholder="Confirmer le mot de passe" />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>

          <button type="submit">Mettre à jour</button>
        </form>

        <p v-if="errors.general" class="error">{{ errors.general }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </div>

      <button class="delete-btn" @click="deleteAccount">Supprimer mon compte</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

const user = ref({
  _id: null,
  firstname: "",
  lastname: "",
  email: "",
});
const password = ref("");
const confirmPassword = ref("");
const errors = ref({});
const successMessage = ref("");

// 🔹 Récupérer le profil utilisateur
const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      errors.value.general = "Utilisateur non authentifié.";
      return;
    }

    const response = await $fetch(`http://localhost:8000/users/profile/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    user.value = { ...response };
  } catch (error) {
    console.error("Erreur API :", error);
    errors.value.general = "Impossible de charger le profil.";
  }
};

// 🔹 Modifier le profil
const updateProfile = async () => {
  errors.value = {};
  successMessage.value = "";

  // Vérification du mot de passe
  if (password.value && password.value !== confirmPassword.value) {
    errors.value.password = "Les mots de passe ne correspondent pas.";
    return;
  }

  try {
    const token = localStorage.getItem("token");

    await $fetch(`http://localhost:8000/users/profile/${user.value._id}`, {
      method: "PATCH",
      body: {
        firstname: user.value.firstname,
        lastname: user.value.lastname,
        password: password.value ? password.value : undefined, // Ne pas envoyer si vide
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    successMessage.value = "Profil mis à jour avec succès.";
    password.value = "";
    confirmPassword.value = "";
  } catch (error) {
    errors.value.general = "Erreur lors de la mise à jour du profil.";
  }
};

// 🔹 Supprimer le compte
const deleteAccount = async () => {
  if (!confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) return;

  try {
    const token = localStorage.getItem("token");

    await $fetch(`http://localhost:8000/users/${user.value._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    authStore.logout();
    router.push("/signin");
  } catch (error) {
    errors.value.general = "Erreur lors de la suppression du compte.";
  }
};

// 🔹 Redirection et chargement du profil
onMounted(() => {
  if (!isAuthenticated.value) {
    router.push("/signin");
  } else {
    fetchUserProfile();
  }
});
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  text-align: center;
}

.profile-info p {
  text-align: left;
  font-size: 1.1rem;
  margin: 10px 0;
}

.profile-form {
  margin-top: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input[disabled] {
  background: #f5f5f5;
  cursor: not-allowed;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.delete-btn {
  background: red;
  color: white;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}

.success {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}
</style>
