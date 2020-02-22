import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: 'FireAuth',
    error: null,
    loading: 0
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    startLoading(state) {
      state.loading += 1;
    },
    finishLoading(state) {
      state.loading -= state.loading === 0 ? 0 : 1;
    }

  },
  actions: {
    startLoading({commit}) {
      commit('startLoading');
    },
    finishLoading({commit}) {
      commit('finishLoading');
    }
  },
  modules: {
    auth: auth
  },
});
