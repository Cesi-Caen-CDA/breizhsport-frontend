<template>
  <div>
    <h1>ALL PRODUCTS</h1>
    <div class="products-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </ProductCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([]);
const { data, pending, error, refresh } = await useFetch(
  "https://fakestoreapi.com/products",
  {}
);

if (data.value) {
  products.value = data.value;
}
</script>

<style></style>
