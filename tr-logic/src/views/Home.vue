<template>
  <div class="home">
    <AddNote buttonTitle="Добавить заметку" type="note" />
    <p>Удалить созданную заметку (&larr;), вернуть её (&rarr;)</p>
    <Notes />
  </div>
</template>

<script>
import Notes from '@/components/Notes.vue';
import AddNote from '@/components/AddNote.vue';

export default {
  name: 'Home',
  components: {
    Notes,
    AddNote,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('keyup', this.keyUpHandler);
    });
  },
  methods: {
    keyUpHandler(e) {
      if (this.canUndo && e.key === 'ArrowLeft') {
        this.undo();
      }
      if (this.canRedo && e.key === 'ArrowRight') {
        this.redo();
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyUpHandler);
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 700px;
  min-height: 300px;
  margin: 0 auto;
  background: #eee;
  border-radius: 10px;
  padding: 20px;
}
</style>
