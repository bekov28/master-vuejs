import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL) /*Vite Configuration*/,
  routes: [
    { path: "/", component: HomePage },
    { path: "/contact", component: Contact },
    { path: "/productList", component: ProductList },
    { path: "/product/:productId", component: ProductDetail },
  ],
});
export default router;
