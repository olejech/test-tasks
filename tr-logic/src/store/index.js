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

const getNotesFromLS = () => JSON.parse(localStorage.getItem('notes'));
const syncLSfromState = data => localStorage.setItem('notes', JSON.stringify(data));

export default new Vuex.Store({
  state: {
    notes: getNotesFromLS() || [],
  },

  mutations: {
    addNote(state, newNote) {
      state.notes.push(newNote);

      syncLSfromState(state.notes);
    },

    removeTodo(state, { noteId, todoId }) {
      const foundNote = state.notes.find(note => note.id === noteId);
      const restTodos = foundNote.todos.filter(todo => todo.id !== todoId);
      foundNote.todos = restTodos;

      syncLSfromState(state.notes);
    },

    checkTodo(state, { noteId, todoId }) {
      const foundNote = state.notes.find(note => note.id === noteId);
      const foundTodo = foundNote.todos.find(todo => todo.id === todoId);
      foundTodo.done = !foundTodo.done;

      syncLSfromState(state.notes);
    },

    changeNameNote(state, { noteId, title }) {
      const foundNote = state.notes.find(note => note.id === noteId);
      foundNote.title = title;

      syncLSfromState(state.notes);
    },

    addTodos(state, { noteId, todos }) {
      const foundNote = state.notes.find(note => note.id === noteId);
      foundNote.todos.push(...todos);

      syncLSfromState(state.notes);
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
