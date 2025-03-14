import { defineStore } from 'pinia';
import type { Product } from '~/interfaces/products';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ product: Product, quantity: number }>, 
  }),
  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0),
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find(item => item.product._id === product._id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ product, quantity: 1 });
      }
    },
    clearCart() {
      this.items = [];
    },
  },
});
