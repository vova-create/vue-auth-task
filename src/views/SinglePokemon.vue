<template>
  <div class="profile-page">
    <div class="profile-header">
      <img :src="getSinglePokemonImage" alt="pokemon picture" class="profile-pic">
      <h2>{{getPokemon?.name}}</h2>
    </div>
    <div style='text-align: center' class="profile-content">
      <h3>weight:{{getPokemon?.weight}}</h3>
      <h3>height:{{getPokemon?.height}}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'SinglePokemon',
  async created() {
    await this.getImageUrlPokemon(this.$route.params.id)
    await this.getSinglePokemon(this.$route.params.id)
    console.log(this.$route.params.id)
  },

  methods: {
    ...mapActions(['getSinglePokemon','getImageUrlPokemon']),
    ...mapMutations(['showSinglePokemon'])
  },

  computed: {
    ...mapGetters(['getPokemon','getSinglePokemonImage']),
    ...mapState(['singlePokemon']),


  },
}
</script>
