/* eslint-disable */

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
            done: false,
          },
          {
            id: 2,
            title: 'Купить молоко',
            done: true,
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
            done: false,
          },
          {
            id: 2,
            title: 'Реакт',
            done: false,
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
    checkTodo(state, { noteId, todoId }) {
      state.notes
        .find(note => note.id === noteId)
        .todos.map(todo => {
          if (todo.id === todoId) {
            todo.done = !todo.done;
          }
          return todo;
        });
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
    checkTodo({ commit }, { noteId, todoId }) {
      commit('checkTodo', { noteId, todoId });
    },
  },
});
