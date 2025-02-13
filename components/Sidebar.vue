<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    permanent
    :mini-variant="mini"
    class="sidebar"
  >
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">Panier</v-list-item-title>
          <v-badge color="red" overlap :value="totalItems" class="badge">
            <v-list-item-title>Panier</v-list-item-title>
          </v-badge>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cart";

const drawer = ref(true); // Controla o estado do drawer
const mini = ref(false); // Controla o estado minimizado
const cart = useCartStore();
const totalItems = computed(() => cart.totalItems);
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
