import axios from '@/plugins/axios'

const state = {
  token: localStorage.getItem('token') || '',
  user: undefined
}

const actions = {
  set({ commit }, { token = '', user = {} }) {
    commit('setToken', token);
    commit('setUser', user);
    localStorage.setItem('token', token);
  },

  delete({ commit }) {
    commit('setToken', '');
    commit('setUser', undefined)
    localStorage.removeItem('token');
  },

  async getUser({ commit }) {
    await axios.get('auth/me').then((res) => {
      if (res && res.data) {
        // console.log('me', res.data)
        commit('setUser', res.data);
      } else throw new Error("Не удалось обновить: пришли неверные данные")
    })
      .catch((err) => {
        throw err
      })
      // .finally(() => {
      //   commit('setLoading', false);
      // });
  },
};

const mutations = {
  setToken(state, value) {
    state.token = value;
  },

  setUser(state, value) {
    state.user = value;
  }
};

const getters = {
  user: (state) => state.user,
  isAdmin: (state) => (state.user ? state.user.admin : -1)
}


export const session = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
