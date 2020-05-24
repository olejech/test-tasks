<template>
  <div class="notes">
    <h1 class="title">Заметки</h1>
    <div v-if="notes.length" class="notes-wrap">
      <div class="note" v-for="note in notes" :key="note.id">
        <Note :noteFromParent="note" isTitleLink />
      </div>
    </div>
    <div v-else>Нет задач</div>
  </div>
</template>

<script>
import Note from '@/components/Note.vue';

export default {
  name: 'Notes',
  components: {
    Note,
  },
  methods: {
    removeTodo(noteId, todoId) {
      this.$store.dispatch('removeTodo', { noteId, todoId });
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
  margin-bottom: 20px;
}
.todo {
  flex: 0 1 100%;
}
</style>
