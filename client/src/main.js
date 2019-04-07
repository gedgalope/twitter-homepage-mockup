import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store/index.js'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAop_LHND2ydbDn0L1WN7FZ4wS7I5DoU_I",
  authDomain: "socialmediavue-ec26c.firebaseapp.com",
  databaseURL: "https://socialmediavue-ec26c.firebaseio.com",
  projectId: "socialmediavue-ec26c",
  storageBucket: "socialmediavue-ec26c.appspot.com",
  messagingSenderId: "476209635384"
};
firebase.initializeApp(config);


Vue.config.productionTip = false

new Vue({
  firebase,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
