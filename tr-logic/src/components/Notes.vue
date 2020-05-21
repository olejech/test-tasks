<template>
  <div class="notes">
    <h1 class="title">Заметки</h1>
    <div class="notes-wrap">
      <div class="note" v-for="note in notes" :key="+note.id">
        <h2>
          <router-link :to="'/note/' + note.id" class="link">{{note.title}}</router-link>
        </h2>
        <ul class="list">
          <li class="item" v-for="(todo, i) in note.todos" :key="todo.title">
            {{i + 1}}.&nbsp;
            <span class="todo">{{todo.title}}</span>
            <button class="button" @click="removeTodo">Удалить</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  methods: {
    removeTodo() {
      console.log('click');
    },
  },
  computed: {
    notes() {
      return this.$store.state.notes;
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
}
.button {
  display: inline-block;
  background: tomato;
  border: 0;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
.notes-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.note {
  width: 100%;
  max-width: calc((100% / 2) - 30px);
  padding: 10px;
  background: rgb(216, 211, 211);
  border-radius: 5px;
}
.todo {
  flex: 0 1 100%;
}
</style>
