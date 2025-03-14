<template>
  <div class="container">
    <h2>Gestion des Produits</h2>

    <!-- 🔹 Afficher un message si l'utilisateur n'est pas authentifié -->
    <p v-if="!isAuthenticated" class="error">Vous devez être connecté pour gérer les produits.</p>

    <!-- 🔹 Liste des produits -->
    <div v-if="isAuthenticated">
      <table class="product-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }} €</td>
            <td>{{ product.category }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <button @click="editProduct(product)">Modifier</button>
              <button class="delete-btn" @click="deleteProduct(product._id)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 🔹 Formulaire d'ajout/modification -->
    <div v-if="isAuthenticated" class="product-form">
      <h3>{{ isEditing ? "Modifier le produit" : "Ajouter un produit" }}</h3>
      <form @submit.prevent="isEditing ? updateProduct() : createProduct()">
        <input v-model="product.name" type="text" placeholder="Nom du produit" required />
        <input v-model.number="product.price" type="number" placeholder="Prix" required />
        <input v-model="product.category" type="text" placeholder="Catégorie" required />
        <textarea v-model="product.description" placeholder="Description"></textarea>
        <input v-model.number="product.stock" type="number" placeholder="Stock disponible" required />

        <button type="submit">{{ isEditing ? "Modifier" : "Ajouter" }}</button>
        <button v-if="isEditing" type="button" class="cancel-btn" @click="resetForm">Annuler</button>
      </form>

      <p v-if="errors.general" class="error">{{ errors.general }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore"; // 🔹 Authentification

const router = useRouter();
const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

// Liste des produits
const products = ref([]);

// Produit en cours d'ajout ou de modification
const product = ref({
  _id: null,
  name: "",
  price: null,
  category: "",
  description: "",
  stock: null,
});

const isEditing = ref(false);
const errors = ref({});
const successMessage = ref("");

// 🔹 Charger les produits au montage
const fetchProducts = async () => {
  try {
    products.value = await $fetch("http://localhost:8000/products");
  } catch (error) {
    console.error("Erreur API :", error);
  }
};

// 🔹 Ajouter un produit
const createProduct = async () => {
  try {
    const response = await $fetch("http://localhost:8000/products", {
      method: "POST",
      body: product.value,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    successMessage.value = "Produit ajouté avec succès.";
    fetchProducts();
    resetForm();
  } catch (error) {
    errors.value.general = "Erreur lors de l'ajout du produit.";
  }
};

// 🔹 Modifier un produit
const editProduct = (prod) => {
  product.value = { ...prod };
  isEditing.value = true;
};

// 🔹 Mettre à jour un produit
const updateProduct = async () => {
  try {
    const response = await $fetch(`http://localhost:8000/products/update/${product.value._id}`, {
      method: "PUT",
      body: product.value,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    successMessage.value = "Produit modifié avec succès.";
    fetchProducts();
    resetForm();
  } catch (error) {
    errors.value.general = "Erreur lors de la modification du produit.";
  }
};

// 🔹 Supprimer un produit
const deleteProduct = async (id) => {
  try {
    await $fetch(`http://localhost:8000/products/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    successMessage.value = "Produit supprimé avec succès.";
    fetchProducts();
  } catch (error) {
    errors.value.general = "Erreur lors de la suppression du produit.";
  }
};

// 🔹 Réinitialiser le formulaire
const resetForm = () => {
  product.value = { _id: null, name: "", price: null, category: "", description: "", stock: null };
  isEditing.value = false;
  successMessage.value = "";
  errors.value = {};
};

// 🔹 Rediriger les utilisateurs non connectés
onMounted(() => {
  if (!isAuthenticated.value) {
    router.push("/signin");
  } else {
    fetchProducts();
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  text-align: center;
}

.product-table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.product-form {
  margin-top: 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
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

.cancel-btn {
  background: gray;
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
