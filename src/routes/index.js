import { createRouter, createWebHistory } from "vue-router";
//import SliderBrands from "@/components/main/slider/SliderBrands"

const routes = [
  //{ path: "/", component: Home },
  //{ path: "/productsDetail/:id", name: "ProductsDetail", component: SliderBrands },
  //{ path: "/about", component: About },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;