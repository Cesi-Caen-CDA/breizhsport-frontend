<template>
<<<<<<< HEAD
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <span>Categoria: {{ product.category }}</span>
      <div class="price">Preço: ${{ product.price }}</div>
=======
  <div class="card">
    <div class="pdt-name">
      <h2>Produit: {{ pdt.name }}</h2>
    </div>
    <div class="pdt-prix">
      <p>Prix: {{ `€ ` + pdt.price }}</p>
    </div>
    <div class="pdt-desc">
      <p>Description: {{ pdt.description }}</p>
    </div>
    <div class="pdt-stock">
      <p>En estoque: {{ pdt.stock }}</p>
    </div>
    <div class="contain-btn-pdt">
      <v-btn class="btn-see-pdt">Voir produit</v-btn>
      <v-btn @click="addToCart" class="btn-plus">+ Panier</v-btn>
>>>>>>> r-frontEnd
    </div>
  </div>
</template>

<script lang="ts" setup>
<<<<<<< HEAD
defineProps({ product: { type: Object, required: true } });
</script>

<style></style>
=======
import type { Product } from "~/interfaces/products";

defineProps(["pdt"]);

const cart = useCartStore();
const addToCart = (pdt: Product) => {
  cart.addToCart(pdt);
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
  width: 47vh;
}
.contain-btn-pdt {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 5px;
  margin-top: auto;

  .btn-see-pdt {
    padding: 5px;
  }
  .btn-plus {
  }
}
</style>
>>>>>>> r-frontEnd
