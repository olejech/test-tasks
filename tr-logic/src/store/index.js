import Vue from 'vue';
import Vuex from 'vuex';
import VuexUndoRedo from 'vuex-undo-redo';
import { generateId } from '../utils/id';

Vue.use(Vuex);
Vue.use(VuexUndoRedo);

function transformTextToTodos(textarea) {
  const textTodos = textarea.split('\n');

  return textTodos.map(title => ({
    id: generateId(),
    title,
    done: false,
  }));
}

export default new Vuex.Store({
  state: {
    notes: [],
  },

  mutations: {
    addNote(state, newNote) {
      state.notes.push(newNote);
    },

    removeTodo(state, { noteId, todoId }) {
      const foundNote = state.notes.find(note => note.id === noteId);
      const restTodos = foundNote.todos.filter(todo => todo.id !== todoId);

      foundNote.todos = restTodos;
    },

    checkTodo(state, { noteId, todoId }) {
      const foundNote = state.notes.find(note => note.id === noteId);
      const foundTodo = foundNote.todos.find(todo => todo.id === todoId);

      foundTodo.done = !foundTodo.done;
    },

    changeNameNote(state, { noteId, title }) {
      const foundNote = state.notes.find(note => note.id === noteId);

      foundNote.title = title;
    },

    addTodos(state, { noteId, todos }) {
      const foundNote = state.notes.find(note => note.id === noteId);

      foundNote.todos.push(...todos);
    },

    emptyState() {
      this.replaceState({ notes: [] });
    },
  },

  actions: {
    addNote({ commit }, { title, textarea }) {
      const todos = transformTextToTodos(textarea);

      const newNote = {
        id: generateId(),
        title,
        todos,
      };
      commit('addNote', newNote);
    },

    removeTodo({ commit }, payload) {
      commit('removeTodo', payload);
    },

    checkTodo({ commit }, payload) {
      commit('checkTodo', payload);
    },

    changeNameNote({ commit }, payload) {
      commit('changeNameNote', payload);
    },

    addTodos({ commit }, { noteId, textarea }) {
      const todos = transformTextToTodos(textarea);

      commit('addTodos', { noteId, todos });
    },
  },
});
