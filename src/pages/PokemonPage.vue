<template>
  <h1 v-if="!pokemon">Esperanding...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonImage v-bind:pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @select-pokemon="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ msg }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonsOptions from "@/helpers/getpokemonOptions";
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      msg: "",
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId, name) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectedId == this.pokemon.id) {
        this.msg = `Correcto ${name}`;
      } else {
        this.msg = `Uppps, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArr()
    },
  },
  mounted() {
    this.mixPokemonArr();
  },
};
</script>
F
<style>
</style>