<template>
  <!-- <h1>Pokemon #{{this.$route.params.id}}</h1> -->
  <h1>Pokemon #{{ id }}</h1>
  <template v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />

  </template>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
      // id: null,
      // id: this.$route.params.id,
    };
  },
  created() {
    // const { id } = this.$route.params;
    // this.id = id;
    // console.log(id);
    this.getpokemon();
  },
  methods: {
    async getpokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((resp) => resp.json());
        this.pokemon = pokemon;
        console.log(pokemon);
      } catch (error) {
        this.$router.push('/')
      }
    },
  },
  watch: {
    id() {
      console.log(this.id);
      this.getpokemon()
    }
  }
};
</script>

<style>
</style>