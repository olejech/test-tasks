<template>
  <div class="home">
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue';

export default {
  name: 'Home',
  components: {
    Todos,
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
