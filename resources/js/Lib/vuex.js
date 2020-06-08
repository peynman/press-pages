import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    /**
     * Application state
     *  @ user: current logged in user / or null if user is not logged in
     *  @ tokens:
     *      @ api: token to use for logged in users on api calls
     *      @ web: token used as a cookie
     *  @ language: page language or null if none is provided
     */
  state: {
      user: null,
      tokens: {
          api: null,
          web: null,
      },
      language: null,
  },
  mutations: {},
  actions: {},
  getters: {
  }
});
