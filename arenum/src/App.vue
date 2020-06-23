<template>
  <div class="container" id="app">
    <game-item />
  </div>
</template>

<script>
import GameItem from './components/GameItem.vue'

export default {
  name: 'App',
  components: {
    GameItem
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/style';

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 18px 20px;
  background: $black;
  height: 100vh;
}
</style>
