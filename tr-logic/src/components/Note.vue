<template>
  <div>
    <h2>
      <router-link v-if="isTitleLink" :to="'/note/' + note.id" class="link">{{note.title}}</router-link>
      <template v-else>{{note.title}}</template>
    </h2>

    <ul v-if="note.todos.length" class="list">
      <li class="item" v-for="todo in note.todos" :key="todo.title">
        <span class="todo">{{todo.title}}</span>
        <button v-if="canChange" class="btn btn-change" @click="changeTodo">Изменить</button>
        <button class="btn btn-remove" @click="removeTodo(todo.id)">Удалить</button>
      </li>
    </ul>
    <div v-else>Нет задач</div>
  </div>
</template>

<script>
export default {
  name: 'Note',
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
  },
  data() {
    return {
      note: {},
    };
  },
  created() {
    if (this.noteFromParent) {
      this.note = this.noteFromParent;
    } else {
      this.note = this.$store.state.notes.find(
        note => note.id === +this.$route.params.id
      );
    }
  },
  methods: {
    removeTodo(todoId) {
      this.$store.dispatch('removeTodo', {
        noteId: +this.$route.params.id,
        todoId,
      });
    },
    changeTodo() {
      console.log('click');
    },
  },
};
</script>

<style scoped lang="scss">
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
  flex: 0 1 100%;
}
</style>
