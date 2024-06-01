import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    pokemon: [],
    singlePokemon: null,
    singleImageUrlPokemon: null,
  },

  actions: {
    async getPokemon(ctx) {
      let pokemon;
      const url = 'https://pokeapi.co/api/v2/pokemon/'
      await axios.get(url).then(data => pokemon = data.data.results)
      ctx.commit('showPokemon', pokemon)
    },


    async getSinglePokemon(ctx, id) {
      let singlePokemon;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      await axios.get(url).then(data => singlePokemon =  data.data)
      console.log(singlePokemon)
      ctx.commit('showSinglePokemon', singlePokemon)
      return singlePokemon
    },

    async getImageUrlPokemon(ctx, id) {
      let singleImageUrlPokemon;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      await axios.get(url).then(data => singleImageUrlPokemon =  data.data.sprites.other.dream_world.front_default)
      ctx.commit('showSingleImageUrlPokemon', singleImageUrlPokemon)
    },
  },

  mutations: {
    showPokemon(state, pokemon){
      state.pokemon = pokemon
    },
    showSinglePokemon(state, singlePokemon){
      state.singlePokemon = singlePokemon
    },
    showSingleImageUrlPokemon(state, singleImageUrlPokemon){
      state.singleImageUrlPokemon = singleImageUrlPokemon
    }
  },
  getters: {
    getAllPokemon(state) {
      return state.pokemon
    },

    getPokemon(state) {
      return state.singlePokemon
    },

    getSinglePokemonImage(state) {
      return state.singleImageUrlPokemon
    },
  },

  modules: {}
})

export default store
