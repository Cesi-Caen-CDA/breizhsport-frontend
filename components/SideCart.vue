<template>
  <div class="cart-sidebar" :class="{ open: cartStore.isCartOpen }">
    <div class="cart-header">
      <h2>🛒 Meu Carrinho</h2>
      <button class="close-btn" @click="cartStore.toggleCart">x</button>
    </div>

    <div v-if="cartStore.cart.length === 0" class="empty-cart">
      <p>Seu carrinho está vazio.</p>
    </div>

    <ul v-else class="cart-items">
      <li v-for="(item, index) in cartStore.cart" :key="index">
        <div class="cart-item">
          <span>{{ item.product.name }}</span>
          <span>€ {{ item.product.price }} x {{ item.quantity }}</span>
          <button @click="cartStore.removeFromCart(item.product._id)">
            🗑️
          </button>
        </div>
      </li>
    </ul>

    <div class="cart-footer">
      <p>
        <strong>Total: € {{ cartStore.totalPrice.toFixed(2) }}</strong>
      </p>
      <button @click="cartStore.clearCart" class="clear-cart">
        🧹 Nettoyer Panier
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/storeCart";

const cartStore = useCartStore();
</script>

<style scoped>
.cart-sidebar {
  position: fixed;
  top: 64px; /* Match navbar height */
  right: -300px;
  width: 300px;
  height: calc(100vh - 64px); /* Subtract navbar height */
  background: var(--dark);
  color: var(--light);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
}

.cart-sidebar.open {
  right: 0; /* Abre o carrinho */
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--dark-alt);
}

.cart-footer {
  margin-top: 20px;
  text-align: center;
}

.clear-cart {
  background: var(--primary);
  color: var(--light);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.clear-cart:hover {
  background: var(--primary-alt);
}
</style>
