import Vue from 'vue'
import Vuex from 'vuex'
import { session } from '@/store/session.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    initialize: ({ state, dispatch }, from) => {
      if (state.session.token){
        return dispatch('session/getUser', from)
      }
    }

  },
  modules: {
    session,
  }
})
