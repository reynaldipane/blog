import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    arrArticle: [],
    arrUserArticle: [],
    activeUser: {
      userId: localStorage.getItem('userid') || ``,
      token: localStorage.getItem('token') || ``,
      email: localStorage.getItem('email') || ``,
      name: localStorage.getItem('name') || ``
    },
    activeArticle: {}
  },
  getters: {
    getArrArticle: state => {
      return state.arrArticle
    },
    getArrUserArticle: state => {
      return state.arrUserArticle
    },
    getActiveArticle: state => {
      return state.activeArticle
    },
    getActiveUser: state => {
      return state.activeUser
    }
  },
  mutations: {
    setArrArticle (state, payload) {
      state.arrArticle = payload
    },
    setArrUserArticle (state, payload) {
      state.arrUserArticle = payload
    },
    setActiveArticle (state, payload) {
      state.activeArticle = payload
    },
    setActiveUser (state, payload) {
      state.activeUser = payload
    }
  },
  actions: {
    signIn (context, payload) {
      return axios.post('http://localhost:3000/api/users/signin', {
        username_email: payload.username_email,
        password: payload.password
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('userid', response.data.data.id)
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('name', response.data.data.name)
            const objNewLoginUser = {
              userId: localStorage.getItem('userid'),
              token: localStorage.getItem('token'),
              email: localStorage.getItem('email'),
              name: localStorage.getItem('name')
            }
            context.commit('setActiveUser', objNewLoginUser)
            alert('Login Success')
          } else {
            alert('Login Failed, please check your username or password')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    signOut (context) {
      localStorage.removeItem('userid')
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      context.state.activeUser.userid = ``
      context.state.activeUser.token = ``
      context.state.activeUser.email = ``
    },
    signUp (context, payload) {
      return axios.post('http://localhost:3000/api/users/signup', {
        username: payload.username,
        password: payload.password,
        name: payload.name,
        email: payload.email,
        gender: payload.gender
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('userid', response.data.data.id)
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('email', response.data.data.email)
            localStorage.setItem('name', response.data.data.name)
            const objNewLoginUser = {
              userId: localStorage.getItem('userid'),
              token: localStorage.getItem('token'),
              email: localStorage.getItem('email'),
              name: localStorage.getItem('name')
            }
            context.commit('setActiveUser', objNewLoginUser)
            alert('Sign Up Success, Happy Writing !')
          } else {
            alert('sign up error')
          }
        })
        .catch(err => {
          alert(`sign up error ${err}`)
        })
    },
    createNewArticle (context, payload) {
      return axios.post('http://localhost:3000/api/articles', {
        title: payload.title,
        articleBody: payload.articleBody,
        userid: context.state.activeUser.userId
      })
        .then((response) => {
          if (response.status === 200) {
            alert('New Article Created !')
          } else {
            alert('Erro creating article !')
          }
        })
        .catch((err) => {
          alert(`An error occured ! ${err}`)
        })
    },
    getUserArticle (context) {
      axios.get(`http://localhost:3000/api/articles/userarticle/${context.state.activeUser.userId}`, {})
        .then((articles) => {
          context.commit('setArrUserArticle', articles.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAllArticle (context) {
      axios.get('http://localhost:3000/api/articles', {})
        .then((articles) => {
          context.commit('setArrArticle', articles.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getArticleById (context, payload) {
      axios.get(`http://localhost:3000/api/articles/${payload}`, {})
        .then((article) => {
          context.commit('setActiveArticle', article.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateArticleById (context, payload) {
      return axios.put(`http://localhost:3000/api/articles/${payload._id}`, {
        title: payload.title,
        articleBody: payload.articleBody
      })
        .then((article) => {
          alert('Your Article Has Been Updated !')
        })
        .catch((err) => {
          alert(`An error occured ! ${err}`)
        })
    },
    deleteArticleById (context, payload) {
      return axios.delete(`http://localhost:3000/api/articles/${payload}`)
        .then(() => {
          alert(`Article Has Been Deleted !`)
        })
        .catch((err) => {
          alert(`An error occured ! ${err}`)
        })
    }
  }
})

export default store
