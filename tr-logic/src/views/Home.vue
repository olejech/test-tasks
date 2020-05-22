<template>
  <div class="home">
    <Add-note />
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
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 700px;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  background: #eee;
  border-radius: 10px;
  padding: 20px;
}
</style>
