<template>
  <div class="container" id="app">
    <section v-if="error">
      <h1 class="error">Произошла ошибка</h1>
    </section>
    <div v-else v-for="game in games" :key="game.tournamentCode">
      <game-item
        :image="game.tournamentData.cardImage"
        :date="game.tournamentData.startedAt"
        :paymentType="game.tournamentData.paymentType"
        :name="game.tournamentData.name"
        :gameMode="game.tournamentData.tournamentType.gameMode"
        :participateCount="game.tournamentData.participateCount"
        :maxUsers="game.tournamentData.maxUsers"
        :prizeTable="game.tournamentData.prizeTable"
      />
    </div>
  </div>
</template>

<script>
import axios from './plugins/axios.js'
import GameItem from './components/GameItem.vue'

export default {
  name: 'App',
  components: {
    GameItem
  },
  data() {
    return {
      games: [],
      error: false
    }
  },
  async mounted() {
    try {
      const res = await axios.get(
        '?start=0&gameCode=f533d4be-5b8e-11e9-8647-d663bd873d93&max=15&includePaid=true'
      )
      this.games = res.data
    } catch (error) {
      this.error = true
    }
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/style';

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px 18px;
  background: $black;
  min-height: 100vh;
}

.error {
  text-align: center;
  padding-top: 50px;
  color: darkRed;
}
</style>
