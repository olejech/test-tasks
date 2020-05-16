<template>
  <div class="container">
    <div v-if="loading">Загружается...</div>
    <div v-else-if="person" class="person">
      <router-link to="/">Назад</router-link>
      <h1>Пользователь {{person.name}}</h1>
      <ul>
        <li>Рост: {{person.height}}</li>
        <li>Вес: {{person.mass}}</li>
        <li>Цвет волос: {{person.hair_color}}</li>
        <li>Цвет кожи: {{person.skin_color}}</li>
        <li>Цвет глаз: {{person.eye_color}}</li>
        <li>Год рождения: {{person.birth_year}}</li>
        <li>Пол: {{person.gender}}</li>
        <li>Планета: {{person.homeworld}}</li>
        <li v-if="person.films.length">
          Фильмы:
          <ul v-for="film in person.films" :key="film">
            <li>{{film}}</li>
          </ul>
        </li>
        <li v-if="person.species.length">
          Вид:
          <ul v-for="specie in person.species" :key="specie">
            <li>{{specie}}</li>
          </ul>
        </li>
        <li v-if="person.vehicles.length">
          Транспорт:
          <ul v-for="vehicle in person.vehicles" :key="vehicle">
            <li>{{vehicle}}</li>
          </ul>
        </li>
        <li v-if="person.starships.length">
          Звездолеты:
          <ul v-for="starship in person.starships" :key="starship">
            <li>{{starship}}</li>
          </ul>
        </li>
        <li>Создано: {{person.created}}</li>
        <li>Изменено: {{person.edited}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: null,
      loading: true,
    }
  },
  async created() {
    try {
      this.person = await this.$store.dispatch(
        'searchPersonByName',
        this.$route.params.name
      )
      this.loading = false
    } catch (e) {
      this.loading = false
    }
  },
}
</script>

<style>
</style>