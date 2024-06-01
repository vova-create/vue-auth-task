<template>
    <div class="wrapper">
      <nav class='navigation'>
        <RouterLink class='navigation__link' to="/">Home</RouterLink>
        <RouterLink class='navigation__link' to="/profile">Profile</RouterLink>
        <RouterLink class='navigation__link' to="/pokemon">Pokemon</RouterLink>
        <div v-if='isLoggedIn' class='navigation__link' @click="handleSignOut">Sign out</div>
      </nav>
    </div>
  <RouterView />
</template>


<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from './router'

export default {

  data(){
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    handleSignOut() {
      let auth = getAuth()
      signOut(auth).then(() => {
        router.push("/")
      })
    },
  },

  mounted() {
  let auth = getAuth()
  onAuthStateChanged(auth,(user) => {
    this.isLoggedIn = !!user;
  })
  },
}
</script>

<style lang='sass'>
.navigation
  display: flex
  justify-content: space-evenly
  font-size: 16px
  padding: 10px
  background-color: rgb(74, 75, 188)

.navigation__link
  text-decoration: none
  color: #ffffff
  font-size: 1.1rem
  padding: 0.5rem 1rem
  border-radius: 4px
  transition: background-color 0.7s, color 0.3s
  cursor: pointer


  &:hover
    background-color: #d910d9


  &:focus
    outline: none
    background-color: #cb8fcb

</style>
