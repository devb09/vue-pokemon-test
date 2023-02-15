import { createRouter, createWebHashHistory } from "vue-router";
import PokemonPage from "@/pages/PokemonPage";

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName:"GamePage" */ "@/pages/PokemonPage"),
  },
  {
    path: "/detail",
    component: () =>
      import(/* webpackChunkName:"DetailPage" */ "@/pages/PokemonDetail"),
  },
  { path: "/:pathMatch(.*)*", component: PokemonPage }, //404
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
