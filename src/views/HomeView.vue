<template>
  <main class='main'>
    <div class='main__left'>
    <div class='main__left-up'>
      <h1 v-if='signIn' class='main__left-title'>Sign in to</h1>
      <h1 v-else class='main__left-title'>Sign up to</h1>

      <h2 class='main__left-sup-title'>Lorem Ipsum is simply </h2>
    </div>
    <div class='main__left-down'>
      <div class='main__left-down-text'>If you don’t have an account <br> You can <span @click='signIn = false' class='main__left-down-purple'>Register here!</span> or if you have an account you can<span @click='signIn = true' class='main__left-down-purple'> Login here! </span> </div>
      <div class='main__left-down-image'>
        <img src='@/assets/images/form-image.png' alt='man with a phone'>
      </div>
    </div>
    </div>
    <div class='main__right'>
      <div v-if='signIn' class='login-form'>
        <div class='login-form__title'>Sign in</div>
        <input class='login-form__input' type='text' v-model='email' placeholder='Enter email or user name'>
          <input class='login-form__input' type='password' v-model='password' placeholder='Password'>
        <div class='login-form__password-error'>{{this.logError}}</div>
        <div class='login-form__grey'>Forgot password ?</div>
          <button class='login-form__btn' @click="login">Login</button>
          <div class='login-form__grey continue'>or continue with</div>
          <div class='login-form__social-icons'>
            <img src='@/assets/images/group-icons.png' alt='group-social-icons'>
          </div>
      </div>
      <div v-else class='sign-form'>
        <div class='login-form__title'>Sign up</div>
        <input class='login-form__input' type='text' v-model='email' placeholder='Enter email or user name'>
        <input class='login-form__input' type='text' placeholder='Create User name'>
        <input class='login-form__input' type='text' placeholder='Contact number'>
        <input class='login-form__input' type='password' v-model='password' placeholder='Password'>
        <div class='login-form__password-error'>{{this.regError}}</div>
        <button class='login-form__btn' @click="register">Register</button>
        <div class='login-form__grey continue'>or continue with</div>
        <div class='login-form__social-icons'>
          <img src='@/assets/images/group-icons.png' alt='group-social-icons'>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import {mapState, mapGetters} from 'vuex'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { useRouter } from 'vue-router'
import router from '../router'
// const router = useRouter()

export default  {
  data() {
    return {
      email: '',
      password: '',
      signIn: true,
      isLoggedIn: false,
      logError: '',
      regError: '',
    }
  },
  components: {
  },

  methods: {
    handleSignOut() {
      let auth = getAuth()
      signOut(auth).then(() => {
         router.push("/")
       })
    },
    async register() {
      const auth = getAuth()
      await  createUserWithEmailAndPassword(auth,  this.email, this.password)
        .then(() => {
          router.push('/profile')
        })
        .catch(() => {
          this.regError = 'Email address must contain \'@\'.And password must be at least 6 characters long.'
        })

    },

    async login() {
      const auth = getAuth()
      // console.log(auth)
      await  signInWithEmailAndPassword(auth,  this.email, this.password)
        .then(() => {
          router.push('/profile')
        })
        .catch(() => {
          this.logError = 'The username or password you entered is incorrect'
        })

    }
  },

  mounted() {
    let auth = getAuth()
    onAuthStateChanged(auth,(user) => {
      this.isLoggedIn = !!user;
    })
  },

  computed: {
    ...mapState(['likes']),
    ...mapGetters(['likesAll']),



  }
}


</script>
