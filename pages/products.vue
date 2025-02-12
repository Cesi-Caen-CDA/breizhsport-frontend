<template>
  <div class="contain-all"></div>
  <div class="topo">
    <h1>PAGES DES PRODUITS</h1>
    <p>Tous les products</p>
  </div>
  <div class="header-title"></div>
  <h1>Liste de produits</h1>
  <div class="contain-body">
    <div>
      <ProductCard v-for="pdt in data" :key="pdt._id" :pdt="pdt" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/interfaces/products";
import ProductCard from "~/components/ProductCard.vue";

const { data, pending, error, refresh } = await useFetch<Product[]>(
  `http://localhost:8000/products/`,
  {}
);
</script>

<style>
.contain-all {
  width: 100%;
  height: 100%;
}
.contain-body {
  /* background-color: brown; */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 99%;
  margin: 0 auto;
  max-width: 1200px;
}
/* .card {
  flex: 1;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
} */
</style>
