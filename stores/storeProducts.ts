// stores/products.ts
import { defineStore } from "pinia";
import type { Product } from "~/interfaces/iproducts";

export const useProductsStore = defineStore("products", {
  state: () => ({
    produtos: [] as Product[],
  }),
  actions: {
    async fetchProdutos() {
      const { data } = await useFetch<Product[]>(
        `http://localhost:8000/products/`
      );
      if (data.value) {
        this.produtos = data.value;
      }
    },
  },
});
