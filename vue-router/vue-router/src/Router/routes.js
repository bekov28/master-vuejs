import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authentification/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL) /*Vite Configuration*/,
  routes: [
    { path: "/", component: HomePage },
    { path: "/contact-us", component: Contact, name: "contact" },
    { path: "/contact", redirect: { name: "contact" } }, //redirecting contact to contact-us page
    { path: "/productList", component: ProductList },
    { path: "/login", component: Login, name: "login" },
    {
      path: "/product/:productId/:categoryId?",
      component: ProductDetail,
      name: "productDetails",
      props: true,
    },
    { path: "/product", component: ProductDetail },
    { path: "/:catchAll(.*)", component: NotFound },
  ],
  linkActiveClass: "active btn btn-primary",
});
export default router;
