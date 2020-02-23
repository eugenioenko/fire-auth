export default {
  namespaced: true,
  state: {
    messages: [],
    duration: 3000
  },
  mutations: {
    notify(state, payload) {
      const index = state.messages.push(payload) - 1;
      if (payload.type === 'success') {
        setTimeout(() => {
          this.dispatch('notification/remove', index);
        }, state.duration);
      }
    },
    remove(state, payload) {
      state.messages.splice(payload, 1);
    }
  },
  actions: {
    error({commit}, message) {
      commit('notify', {type: 'error', content: message});
    },
    success({commit}, message) {
      commit('notify', {type: 'success', content: message});
    },
    warning({commit}, message) {
      commit('notify', {type: 'warning', content: message});
    },
    remove({commit}, index) {
      commit('remove', index);
    }
  },
  modules: {
  }
};
