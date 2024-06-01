<template>
  <div class='pokemon-container'>
    <div class='pokemon-words' v-for="(pokemon, key) in getAllPokemon" :key='key'>
      <div @click='$router.push((`/pokemon/${getPokemonId(pokemon.url)}`))'>
        {{pokemon.name}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions,} from 'vuex'

export default {
  name: 'PokemonPage',
  data(){
    return {
      pokemon:[]
    }
  },
  methods: {
    ...mapActions(['getPokemon']),

    getPokemonId(url) {
      const parts = url.split('/');

      const id = parts[parts.length - 2];

      return id;
    }
  },

  async mounted() {
     await this.getPokemon()
  },


  computed: {
    ...mapGetters(['getAllPokemon']),
  }
}
</script>

