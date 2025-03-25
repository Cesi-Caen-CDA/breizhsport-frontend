import { defineStore } from "pinia";
import type { Product } from "~/interfaces/iproducts";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as { product: Product; quantity: number }[], // Liste de quantité des produits
    isCartOpen: false,
  }),
  getters: {
    totalItems: (state) =>
      state.cart.reduce((sum, item) => sum + item.quantity, 0), // Total items
    totalPrice: (state) =>
      state.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ), // Total do preço
  },
  actions: {
    addToCart(product: Product) {
      const item = this.cart.find((i) => i.product._id === product._id);
      if (item) {
        item.quantity++; //  Si le pdt existe, la quantiote est augmente
      } else {
        this.cart.push({ product, quantity: 1 }); // Se não existe, adiciona ao carrinho
      }
    },
    removeFromCart(productId: string) {
      const itemIndex = this.cart.findIndex((i) => i.product._id === productId);
      if (itemIndex !== -1) {
        if (this.cart[itemIndex].quantity > 1) {
          this.cart[itemIndex].quantity--; // Diminui a quantidade
        } else {
          this.cart.splice(itemIndex, 1); // Remove o item se a quantidade for 1
        }
      }
    },
    clearCart() {
      this.cart = []; // Esvazia o carrinho
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}

// import { defineStore } from 'pinia';
// import type { Product } from '~/interfaces/products';

// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     items: [] as Array<{ product: Product, quantity: number }>,
//   }),
//   getters: {
//     totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
//     totalPrice: (state) => state.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0),
//   },
//   actions: {
//     addToCart(product: Product) {
//       const existingItem = this.items.find(item => item.product._id === product._id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         this.items.push({ product, quantity: 1 });
//       }
//     },
//     clearCart() {
//       this.items = [];
//     },
//   },
// });
