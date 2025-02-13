<template>
  <v-app>
    <Sidebar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>
