import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isShow: false,
    prevPosts: [
      {id: 1, imageName: 'Ariana.jpg', title: 'Ariana Grande', previewText: 'Text ...'},
      {id: 2, imageName: 'Kendrick.jpg', title: 'Kendrick Lamar', previewText: 'Text ...'},
      {id: 3, imageName: 'Drake.jpg', title: 'Drake', previewText: 'Text ...'},
      {id: 4, imageName: 'Luke.jpg', title: 'Luke Bryan', previewText: 'Text ...'}
    ]
  },

  mutations: {
    toShow (state, payload) {
      state.isShow = payload
    }
  },

  actions: {
    TOSHOW ({commit}, payload) {
      commit('toShow', payload)
    }
  },

  getters: {
    statusMenu (state) {
      return state.isShow
    },
    prPosts (state) {
      return state.prevPosts
    }
  }

})

export default store