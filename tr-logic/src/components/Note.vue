<template>
  <div>
    <div class="header">
      <h2>
        <router-link v-if="isTitleLink" :to="'/note/' + note.id" class="link">{{note.title}}</router-link>
        <template v-else>{{note.title}}</template>
      </h2>

      <button v-if="canChange" class="btn btn-change" @click="openModalEdit(note)">Изменить</button>
    </div>
    <ul v-if="note.todos.length" class="list">
      <li class="item" v-for="todo in note.todos" :key="todo.id">
        <span class="todo">{{todo.title}}</span>
        <input
          type="checkbox"
          class="checkbox"
          @click="checkTodo(todo.id)"
          :checked="todo.done"
          :disabled="!canCheck"
        />
        <button class="btn btn-remove" @click="confirmRemove(todo.id)">Удалить</button>
      </li>
    </ul>
    <div v-else>Нет задач</div>

    <AddNote v-if="!noteFromParent" type="todos" :noteId="note.id" buttonTitle="Добавить задачи" />

    <Confirm :isOpenModal="isOpenModalConfirm" @confirm="removeTodo" @cancel="closeModal" />

    <EditNote
      v-if="selectedNote"
      :isOpenModal="isOpenModalEdit"
      :note="selectedNote"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Confirm from '@/components/Confirm.vue';
import EditNote from '@/components/EditNote.vue';
import AddNote from '@/components/AddNote.vue';

export default {
  name: 'Note',
  components: {
    Confirm,
    EditNote,
    AddNote,
  },
  props: {
    noteFromParent: {
      type: Object,
    },
    isTitleLink: {
      type: Boolean,
      default: false,
    },
    canChange: {
      type: Boolean,
      default: false,
    },
    canCheck: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      note: {},
      isOpenModalEdit: false,
      isOpenModalConfirm: false,
      selectedTodoId: null,
      selectedNote: null,
    };
  },
  created() {
    if (this.noteFromParent) {
      this.note = this.noteFromParent;
    } else {
      this.note = this.$store.state.notes.find(
        note => note.id === this.$route.params.id
      );
    }
  },
  methods: {
    confirmRemove(id) {
      this.selectedTodoId = id;
      this.isOpenModalConfirm = true;
    },
    removeTodo() {
      this.isOpenModalConfirm = false;

      this.$store.dispatch('removeTodo', {
        noteId: this.note.id,
        todoId: this.selectedTodoId,
      });
    },
    closeModal() {
      this.isOpenModalConfirm = false;
      this.isOpenModalEdit = false;
    },
    openModalEdit(note) {
      this.isOpenModalEdit = true;
      this.selectedNote = note;
    },
    checkTodo(todoId) {
      this.$store.dispatch('checkTodo', {
        noteId: this.note.id,
        todoId,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list {
  list-style-type: none;
  padding: 0;
  font-size: 20px;
}
.item {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.link {
  color: #42b983;
  flex: 0 1 100%;
}
.note-wrap {
  max-width: 100%;
  padding: 20px;
}
.todo {
  min-width: 150px;
  flex: 0 1 100%;
}
.checkbox {
  margin-right: 10px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
