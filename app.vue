<template>
  <v-app>
    <!-- Barra lateral -->
    <Sidebar />

    <!-- Área principal do conteúdo -->
    <v-main>
      <!-- A página será renderizada aqui -->
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue"; // Certifique-se de que o caminho do Sidebar está correto
</script>

<style scoped>
/* Estilos globais, se necessário */
</style>
