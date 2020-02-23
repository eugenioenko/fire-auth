import firebase from 'firebase/app'
import 'firebase/auth';
import router from '@/router'

export default {
  state: {
    email: '',
    uid: ''
  },
  mutations: {
    login(state, payload) {
      state.email = payload.email;
      state.uid = payload.uid;
    }
  },
  actions: {
    signup({commit}, payload) {
      commit('startLoading');
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('login', {email: firebaseUser.user.email, uid: firebaseUser.user.uid});
          this.dispatch('notification/success', `Welcom ${firebaseUser.user.email}`);
          router.push('/');
        }).catch(error => {
          this.dispatch('notification/error', 'Invalid credentials');
        }).finally(() => {
          commit('finishLoading');
        });
    },
    login({commit}, payload) {
      commit('startLoading');
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('login', {email: firebaseUser.user.email, uid: firebaseUser.user.uid});
          this.dispatch('notification/success', `Welcom ${firebaseUser.user.email}`);
          router.push('/');
        }).catch(error => {
          this.dispatch('notification/error', 'Invalid email or password');
        }).finally(() => {
          commit('finishLoading');
        });
    },
    logout({commit}, payload) {
      firebase.auth().signOut();
      commit('login', {email: null, uid: null});
      router.push('/login')
    }
  },
  modules: {
  }
};
