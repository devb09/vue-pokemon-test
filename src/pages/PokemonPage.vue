<template>
  <h1>¿Quien es este Pokemon?</h1>
  <PokemonImage v-bind:pokemonId="1" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonImage from "@/components/PokemonImage";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonsOptions from '@/helpers/getpokemonOptions'
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
  beforeMount() {
    getPokemonsOptions()
  }
};
</script>

<style>
</style>