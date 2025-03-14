<template>
  <v-container>
    <h1 class="text-h4 mb-4">Admin Dashboard</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h2 class="text-h6">Products Management</h2>
          <v-btn
            color="primary"
            class="mt-4"
            @click="navigateTo('/admin/products')"
          >
            Manage Products
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h2 class="text-h6">Orders Management</h2>
          <v-btn
            color="primary"
            class="mt-4"
            @click="navigateTo('/admin/orders')"
          >
            Manage Orders
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Add authentication middleware to protect this route
definePageMeta({
  middleware: "admin",
});
</script>
