import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import Cookie from 'js-cookie'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  // ---------------- STATE ---------------- //

  state: {
    isShow: false,
    prevPosts: [],
    token: null
  },

  // ---------------- MUTATIONS ---------------- //

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
    },
    // ========================
    setToken (state, payload) {
      state.token = payload
    },
    // ========================
    clearToken (state) {
      state.token = null
    }
  },

  // ---------------- ACTIONS ---------------- //

  actions: {
    // ======================== To show / hide mobile navigation menu
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
      return axios.post('https://music-news-cdc05.firebaseio.com/posts.json?auth=' + this.state.token, createdPost)
        .then(res => {
          commit('addPost', { ...createdPost, id: res.data.name })
        })
        .catch(err => console.log(err))
    },
    // ========================
    EDIT_POST ({commit}, payload) {
      return axios.put('https://music-news-cdc05.firebaseio.com/posts/' + payload.id + '.json?auth=' + this.state.token, payload)
        .then(res => {
          commit('editPost', payload)
        })
        .catch(err => console.error(err))
    },
    // ========================
    SET_POSTS ({commit}, payload) {
      commit('setPost', payload)
    },
    // ========================
    AUTHENTICATE_USER ({commit}, payload) {
      let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey;

      if (!payload.isLogin) {
        authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIKey;
      }

      return axios.post(authUrl, { email: payload.email, password: payload.password, returnSecureToken: true })
        .then(result => {
          commit('setToken', result.data.idToken)
          localStorage.setItem('token', result.data.idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000)
          Cookie.set('jwt', result.data.idToken)
          Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000)
          // dispatch('SET_LOGOUT_TIMER', result.data.expiresIn * 1000)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    },
    // ========================
    // SET_LOGOUT_TIMER ({commit}, duration) {
    //   setTimeout(() => {
    //     commit('clearToken')
    //   }, duration)
    // },
    // ========================
    INIT_AUTH ({commit}, req) {
      let token, expirationDate;
      if (req) {

        if (!req.headers.cookie) {
          return;
        }

        const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))

        if (!jwtCookie) {
          return;
        }

        token = jwtCookie.split('=')[1]
        expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1]
      } else {
        token = localStorage.getItem('token')
        expirationDate = localStorage.getItem('tokenExpiration')
      }

      if (new Date().getTime() > +expirationDate || !token) {
        console.log('No token or invalid token')
        dispatch('LOGOUT')
        commit('clearToken')
        return;
      }

      // dispatch('SET_LOGOUT_TIMER', +expirationDate - new Date().getTime())
      commit('setToken', token)
    },
    // ========================
    LOGOUT ({commit}) {
      commit('clearToken')
      Cookie.remove('jwt')
      Cookie.remove('expirationDate')
      if (process.client) {
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      }
    }
  },

  // ---------------- GETTERS ---------------- //

  getters: {
    statusMenu (state) {
      return state.isShow
    },
    // ========================
    prPosts (state) {
      return state.prevPosts
    },
    // ========================
    isAuthenticated (state) {
      return state.token != null
    }
  }

})

export default store