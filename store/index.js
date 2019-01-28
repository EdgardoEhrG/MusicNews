import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isShow: false,
    prevPosts: []
  },

  mutations: {
    toShow (state, payload) {
      state.isShow = payload
    },
    // ========================
    setPosts(state, payload) {
      state.prevPosts = payload
    },
    // ========================
    addPost (state, payload) {
      state.prevPosts.push(payload)
    },
    // ========================
    editPost(state, payload) {
      const postIndex = state.prevPosts.findIndex(post => post.id === payload.id)
      state.prevPosts[postIndex] = payload
    }
  },

  actions: {
    TOSHOW ({commit}, payload) {
      commit('toShow', payload)
    },
    // ======================== To get all posts
    NUXT_SERVER_INIT ({commit}) {
      return axios.get('https://music-news-cdc05.firebaseio.com/posts.json')
        .then(res => {
          const postArray = []
          for (const key in res.data) {
            postArray.push({ ... res.data[key], id: key })
          }
          commit('setPosts', postArray)
        })
        .catch(err => context.error(err))
    },
    // ========================
    ADD_POST ({commit}, payload) {
      const createdPost = {
        ...payload,
        updatedData: new Date()
      }
      return axios.post('https://music-news-cdc05.firebaseio.com/posts.json', createdPost)
        .then(res => {
          commit('addPost', { ...createdPost, id: res.data.name })
        })
        .catch(err => console.log(err))
    },
    // ========================
    EDIT_POST ({commit}, payload) {
      return axios.put('https://music-news-cdc05.firebaseio.com/posts/' + payload.id + '.json', payload)
        .then(res => {
          commit('editPost', payload)
        })
        .catch(err => console.error(err))
    },
    // ========================
    SET_POSTS ({commit}, payload) {
      commit('setPost', payload)
    }
  },

  getters: {
    statusMenu (state) {
      return state.isShow
    },
    // ========================
    prPosts (state) {
      return state.prevPosts
    }
  }

})

export default store