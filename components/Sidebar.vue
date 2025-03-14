<template>
  <nav class="navbar">
    <div class="nav-left">
      <div class="logo">
        <img :src="logoURL" alt="Vue" />
      </div>

      <div class="menu">
        <NuxtLink to="/" class="button">
          <Icon name="mdi:home" class="icon" />
          <span class="text">Home</span>
        </NuxtLink>
        <NuxtLink to="/products" class="button">
          <Icon name="uil:github" class="icon" />
          <span class="text">Products</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="button">
          <Icon name="mdi-email" class="icon" />
          <span class="text">Contact</span>
        </NuxtLink>
        <NuxtLink v-if="isAdmin" to="/admin" class="button">
          <Icon name="mdi:shield-crown" class="icon" />
          <span class="text">Admin</span>
        </NuxtLink>
      </div>
    </div>

    <div class="nav-center">
      <div class="search-box">
        <input
          type="text"
          placeholder="Search products..."
          v-model="searchQuery"
          @input="handleSearch"
        />
        <Icon name="mdi:magnify" class="search-icon" />
      </div>
    </div>

    <div class="nav-right">
      <NuxtLink to="/cart" class="cart-button">
        <Icon name="mdi:cart" class="icon" />
        <span class="cart-count">{{ cartItemCount }}</span>
      </NuxtLink>
      <NuxtLink to="/compte" class="compte-button">
        <Icon name="mdi:account" class="icon" />
        <span class="text">Compte</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { NuxtLink } from "#components";
import { ref, computed } from "vue";
const cart = useCartStore();
const searchQuery = ref("");
const isAdmin = ref(false); // This should be set based on user authentication

// Defina a propriedade logoURL
const logoURL = ref("/path/to/logo.png"); // Substitua pelo caminho correto do logo

// Get cart items count
const cartItemCount = computed(() => cart.totalItems);

// Search functionality
const emit = defineEmits(["search"]);
const handleSearch = () => {
  emit("search", searchQuery.value);
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: var(--dark);
  color: var(--light);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;

    .logo {
      img {
        width: 2rem;
      }
    }

    .menu {
      display: flex;
      gap: 1rem;
    }
  }

  .nav-center {
    flex: 1;
    max-width: 500px;
    margin: 0 2rem;

    .search-box {
      position: relative;
      width: 100%;

      input {
        width: 100%;
        padding: 0.5rem 2.5rem 0.5rem 1rem;
        border-radius: 4px;
        border: none;
        background-color: var(--dark-alt);
        color: var(--light);

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--primary);
        }
      }

      .search-icon {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--grey);
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1rem; /* Adicione esta linha para espaçamento entre os botões */
    justify-content: center; /* Centraliza os itens dentro da nav-right */

    .cart-button {
      background: none;
      border: none;
      color: var(--light);
      position: relative;
      cursor: pointer;
      padding: 0.5rem;

      &:hover {
        color: var(--primary);
      }

      .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: var(--primary);
        color: var(--light);
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 0.75rem;
      }
    }

    .compte-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--light);
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: var(--dark-alt);
        color: var(--primary);

        .icon {
          color: var(--primary);
        }
      }

      .icon {
        font-size: 1.5rem;
        transition: 0.2s ease-in-out;
      }
    }
  }

  .button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--light);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: var(--dark-alt);
      color: var(--primary);

      .icon {
        color: var(--primary);
      }
    }

    &.router-link-exact-active {
      background-color: var(--dark-alt);
      color: var(--primary);

      .icon {
        color: var(--primary);
      }
    }

    .icon {
      font-size: 1.5rem;
      transition: 0.2s ease-in-out;
    }
  }
}

// Add margin to main content to account for fixed navbar
:global(main) {
  margin-top: 64px;
}
</style>
