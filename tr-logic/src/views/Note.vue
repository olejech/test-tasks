<template>
  <div class="note">
    <Add-note />
    <Note-item canChange canCheck />
  </div>
</template>

<script>
import AddNote from '@/components/AddNote.vue';
import NoteItem from '@/components/Note.vue';

export default {
  name: 'Note',
  components: {
    AddNote,
    NoteItem,
  },
};
</script>

<style scoped lang="scss">
.note {
  max-width: 600px;
  margin: 0 auto;
  background: #eee;
  border-radius: 5px;
  padding: 20px;
}
</style>
