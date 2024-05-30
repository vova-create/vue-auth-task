import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    likes: 1,
    pokemon: [],
  },

  actions: {
    async getPokemon(ctx) {
      let pokemon;
      const url = 'https://pokeapi.co/api/v2/pokemon/'
      await axios.get(url).then(data => pokemon = data.data.results)
      console.log(pokemon)
      ctx.commit('showPokemon', pokemon)
    },
  },

  mutations: {
    showPokemon(state, pokemon){
      state.pokemon = pokemon
    }
  },
  getters: {
    getAllPokemon(state) {
      return state.pokemon
    },
  },

  modules: {}
})

export default store
