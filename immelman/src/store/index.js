import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    browsedPeople: [],
  },
  mutations: {
    setBrowsedPeople(state, person) {
      state.browsedPeople.push(person)
    },
  },
  actions: {
    async searchPersonByName({ commit }, username) {
      try {
        const res = await fetch(
          `https://swapi.co/api/people/?search=${username}`
        )
        const { count, results } = await res.json()

        if (count === 1) {
          commit('setBrowsedPeople', username)
          return results[0]
        } else {
          throw 'Нет такого пользователя'
        }
      } catch (error) {
        alert(error)
      }
    },
  },
})
