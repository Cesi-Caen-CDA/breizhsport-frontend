<template>
  <v-app>
    <Sidebar @toggle="handleSidebarToggle" :is_expanded="isExpanded" />
    <v-main :class="{ expanded: isExpanded }">
      <div class="content">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";

const isExpanded = ref(false);

const handleSidebarToggle = (state) => {
  isExpanded.value = state;
};
</script>

<style scoped>
.content {
  margin: 2vh 0 0 9vh;
}

v-main {
  margin-left: calc(2rem + 32px); /* Sidebar pequena */
  transition: margin-left 0.3s ease-in-out;
  min-height: 100vh;
  padding: 2rem;
}

/* Quando a sidebar está expandida */
v-main.expanded {
  margin-left: var(--sidebar-width);
}

@media (max-width: 1024px) {
  v-main {
    margin-left: 0; /* Para esconder a sidebar em telas menores */
  }
}
</style>
