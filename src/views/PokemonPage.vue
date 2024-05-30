<template>
  <div class='pokemon-container'>
    <div class='pokemon-words' v-for="(pokemon, key) in getAllPokemon" :key='key'>
      {{pokemon.name}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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

<style lang='sass'>

.pokemon-container
  //min-height: 100vh
  color: #ffffff
  background-image: url('../assets/images/background-pokemon.jpg')
  display: flex
  flex-direction: column
  align-items: center
  gap: 10px
  padding: 10px



.pokemon-words
  color: #fff
  font-weight: 900
  font-size: 30px
  cursor: pointer
  transition: 0.3s ease-in-out
  padding: 10px
  background-color: #333333

.pokemon-words:hover
  transform: scale(1.5)
  color: #8328d7


</style>
