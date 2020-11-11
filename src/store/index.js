import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem (state, data) {
      state.items.push(data)
    },
    delItem (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
