<template>
  <div class="note">
    <button class="btn button-add" @click="openModal">Добавить заметку</button>
    <div class="note-wrap">
      <h1>{{note.title}}</h1>
      <ul v-if="note.todos.length" class="list">
        <li class="item" v-for="todo in note.todos" :key="todo.title">
          <span class="todo">{{todo.title}}</span>
          <button class="btn button-change" @click="changeTodo">Изменить</button>
          <button class="btn button-remove" @click="removeTodo(todo.id)">Удалить</button>
        </li>
      </ul>
      <div v-else>Нет задач</div>
    </div>

    <Add-note :isOpenModal="isOpenModal" @closeModal="closeModal" />
  </div>
</template>

<script>
import AddNote from '@/components/AddNote.vue';

export default {
  name: 'Note',
  components: {
    AddNote,
  },
  data() {
    return {
      isOpenModal: false,
      note: {},
    };
  },
  mounted() {
    this.note = this.$store.state.notes.find(
      note => note.id === +this.$route.params.id
    );
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      console.log('close');

      this.isOpenModal = false;
    },
    removeTodo(todoId) {
      this.$store.dispatch('removeTodo', {
        noteId: +this.$route.params.id,
        todoId,
      });
    },
    changeTodo() {
      console.log('click');
    },
    addNote() {
      this.$store.dispatch('addNote', {
        note: this.note,
        textarea: this.textarea,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  margin: 20px 0;
  text-align: center;
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
.button-remove {
  background: tomato;
  color: white;
}
.button-add {
  background: #42b983;
  color: white;
}
.button-change {
  background: #e4c92e;
  color: white;
  margin-right: 10px;
}
.button-cancel {
  background: darkRed;
  color: white;
  margin-right: 10px;
}
.note {
  max-width: 600px;
  margin: 0 auto;
  background: #eee;
  border-radius: 5px;
  padding: 20px;
}
.note-wrap {
  max-width: 100%;
  padding: 20px;
}
.todo {
  flex: 0 1 100%;
}
</style>
