import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from './firebase.config';
import AlertMessages from './components/AlertMessages';

Vue.config.productionTip = false;
Vue.component('app-alert-messages', AlertMessages);

firebase.initializeApp(firebaseConfig);

const unsubscribe = firebase.auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
      created () {
        if (firebaseUser) {
          store.commit('login',  {email: firebaseUser.email, uid: firebaseUser.uid})
        }
      }
    }).$mount('#app');
    unsubscribe()
})


