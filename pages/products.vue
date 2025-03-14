<template>
  <div class="contain-all-pdt"></div>
  <div class="topo">
    <h1>PAGES DES PRODUITS</h1>
    <p>Tous les products</p>
  </div>
  <div class="header-title"></div>
  <h1>Liste de produits</h1>
  <div class="contain-body-pdt">
    <ProductCard
      v-for="pdt in data"
      :key="pdt._id"
      :pdt="pdt"
      class="pdt-card"
    />
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
.contain-all-pdt {
  background-color: brown;
  width: 100%;
  height: 100%;
}
.contain-body-pdt {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
}
.pdt-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-flow: column wrap;
  justify-content: flex-start;

  border: 1px solid black;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  padding: 6px;
  margin: 10px;
  border-radius: 8px;
}
</style>
