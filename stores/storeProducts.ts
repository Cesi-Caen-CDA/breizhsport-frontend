// stores/products.ts
import { defineStore } from "pinia";
import type { Product } from "~/interfaces/iproducts";
const config = useRuntimeConfig(); // 🔹 Récupération de la configuratio
const apiUrl = config.public.API_URL;

export const useProductsStore = defineStore("products", {
  state: () => ({
    produtos: [] as Product[],
  }),
  actions: {
    async fetchProdutos() {
      const { data } = await useFetch<Product[]>(`${apiUrl}/products/`);
      if (data.value) {
        this.produtos = data.value;
      }
    },
  },
});
