<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <span>Categoria: {{ product.category }}</span>
      <div class="price">Preço: ${{ product.price }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({ product: { type: Object, required: true } });
</script>

<style></style>
