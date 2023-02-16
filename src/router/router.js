import { createRouter, createWebHashHistory } from "vue-router";
import PokemonPage from "@/pages/PokemonPage";

const routes = [
  {
    path: "/",
    name: 'home',
    component: () =>
      import(/* webpackChunkName:"GamePage" */ "@/pages/PokemonPage"),
  },
  {
    path: "/pokemonDetail/:id",
    name: 'pokemon-id',
    component: () =>
      import(/* webpackChunkName:"DetailPage" */ "@/pages/PokemonDetail"),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  { path: "/:pathMatch(.*)*", component: PokemonPage }, //404
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
