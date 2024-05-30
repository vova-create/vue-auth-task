import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import'./assets/style.sass'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNw8BamAimN6m5lSFpNT93Es_fTfpuN-s",
  authDomain: "vue-auth-93cb2.firebaseapp.com",
  projectId: "vue-auth-93cb2",
  storageBucket: "vue-auth-93cb2.appspot.com",
  messagingSenderId: "318629415872",
  appId: "1:318629415872:web:32f393f136dd4a1f37d625",
  measurementId: "G-KYJE0YHSRE"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.use(store)



app.mount('#app')
