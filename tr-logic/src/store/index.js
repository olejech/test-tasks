/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import VuexUndoRedo from 'vuex-undo-redo';
import { generateId } from '../utils/id';

Vue.use(Vuex);
Vue.use(VuexUndoRedo);

export default new Vuex.Store({
  state: {
    notes: [],
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
    changeNameNote(state, { noteId, title }) {
      state.notes.map(note => {
        if (note.id === noteId) {
          note.title = title;
        }
        return note;
      });
    },
    addTodos(state, { noteId, todos }) {
      state.notes.find(note => {
        if (note.id === noteId) {
          note.todos.push(...todos);
        }
        return note;
      });
    },
    emptyState() {
      this.replaceState({ notes: [] });
    },
  },
  actions: {
    addNote({ commit }, { title, textarea }) {
      const titleTodos = textarea.split('\n');
      const todos = titleTodos.map(titleTodo => ({
        id: generateId(),
        title: titleTodo,
        done: false,
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
    changeNameNote({ commit }, { noteId, title }) {
      commit('changeNameNote', { noteId, title });
    },
    addTodos({ commit }, { noteId, textarea }) {
      const titleTodos = textarea.split('\n');
      const todos = titleTodos.map(titleTodo => ({
        id: generateId(),
        title: titleTodo,
        done: false,
      }));

      commit('addTodos', { noteId, todos });
    },
  },
});
