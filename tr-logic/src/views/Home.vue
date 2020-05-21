<template>
  <div class="home">
    <Notes />
  </div>
</template>

<script>
import Notes from '@/components/Notes.vue';

export default {
  name: 'Home',
  components: {
    Notes,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 600px;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  background: #eee;
  border-radius: 10px;
  padding: 20px;
}
</style>
