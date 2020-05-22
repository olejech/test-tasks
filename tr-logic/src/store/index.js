import Vue from 'vue';
import Vuex from 'vuex';
import { generateId } from '../utils/id';

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
            title: 'Купить хлеб',
          },
          {
            id: 2,
            title: 'Купить молоко',
          },
        ],
      },
      {
        id: 2,
        title: 'Учеба',
        todos: [
          {
            id: 1,
            title: 'Вью',
          },
          {
            id: 2,
            title: 'Реакт',
          },
        ],
      },
    ],
  },
  mutations: {
    addNote(state, newNote) {
      state.notes.push(newNote);
    },
    removeTodo(state, { noteId, todoId }) {
      const filteredNote = state.notes.find(note => note.id === noteId);
      const restTodos = filteredNote.todos.filter(todo => todo.id !== todoId);

      filteredNote.todos = restTodos;
    },
  },
  actions: {
    addNote({ commit }, { title, textarea }) {
      const titleTodos = textarea.split('\n');
      const todos = titleTodos.map(titleTodo => ({
        id: generateId(),
        title: titleTodo,
      }));

      const newNote = {
        id: generateId(),
        title,
        todos,
      };
      commit('addNote', newNote);
    },
    removeTodo({ commit }, { noteId, todoId }) {
      commit('removeTodo', { noteId, todoId });
    },
  },
});
