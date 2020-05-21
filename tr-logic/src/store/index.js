import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 1,
        title: 'Покупки',
        todos: [
          {
            id: 1,
            title: 'Купить хлеб'
          },
          {
            id: 1,
            title: 'Купить молоко'
          }
        ],
      },
    ],
  },
  mutations: {
    setTodo(state, newNote) {
      state.notes.push(newNote);
    },
  },
  actions: {
    addNote({ commit }, data) {
      const newNote = {
        id: new Date(),
        note: data.note,
        todos: data.textarea.split('\n'),
      };
      commit('setTodo', newNote);
    },
  },
});
