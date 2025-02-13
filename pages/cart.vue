<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in cart.items"
        :key="item.product._id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title> {{ item.product.name }} </v-card-title>
          <v-card-subtitle> {{ item.product.price }} </v-card-subtitle>
          <v-card-text> Quantité: {{ item.quantity }} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <h3>Total des Produits: {{ cart.totalItems }} articles</h3>
        <h3>Prix Total HT: {{ (cart.totalPrice / 1.2).toFixed(2) }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const cart = useCartStore();
</script>

<style></style>
