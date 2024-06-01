<template>
  <div class='pokemon-container'>
    <div class='pokemon-words' v-for="(pokemon, key) in getAllPokemon" :key='key'>
      <div @click='$router.push((`/pokemon/${pokemon.url.charAt(pokemon.url.length - 2)}`))'>
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
    ...mapActions(['getPokemon'])
  },

  async mounted() {
     await this.getPokemon()
  },

  computed: {
    ...mapGetters(['getAllPokemon']),
  }
}
</script>

