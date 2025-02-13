<template>
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
      <v-btn @click="addToCart">Ajouter au Panier</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/interfaces/products";

defineProps(["pdt"]);

const cart = useCartStore();
const addToCart = (pdt: Product) => {
  cart.addToCart(pdt);
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 5px;
}
.contain-btn-pdt {
  display: flex;
  justify-content: flex-end;
  align-items: right;
}
</style>
