<template>
  <NuxtLayout>
    <v-app>
      <!-- <v-main> -->
      <NuxtPage />
      <!-- </v-main> -->
    </v-app>
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss">
:root {
  --primary: #5f79df;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #321e3b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --white: #ffff;
  --black: #0000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
