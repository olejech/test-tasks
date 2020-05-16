<template>
  <div class="container">
    <h1>Тестовое задание Immelman</h1>
    <div v-if="browsedPeople.length">
      <h2>Просмотренные персонажи:</h2>
      <ul v-for="people in browsedPeople" :key="people.name">
        <li>{{people}}</li>
      </ul>
    </div>

    <div class="search">
      <h2>Поиск персонажей</h2>
      <form @submit.prevent="onSubmit">
        <input v-model="username" type="text" required />
        <button type="submit">Искать</button>
      </form>
    </div>

    <div v-if="loading">Загружается...</div>
    <div v-else v-for="person in people" :key="person.id">
      <div class="card">
        <router-link :to="`/person/${person.name}`">{{person.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      username: '',
      people: [],
      loading: false,
    }
  },
  methods: {
    async onSubmit() {
      if (!this.username) return alert('Введите имя пользователя')
      this.loading = true

      try {
        const res = await fetch(
          `https://swapi.co/api/people/?search=${this.username}`
        )
        const { count, results } = await res.json()
        this.loading = false
        this.username = ''
        if (!count) return alert('Пользователи не найдены')
        this.people = results
      } catch (error) {
        this.loading = false
        console.log('Произошла ошибка:', error)
      }
    },
  },
  computed: mapState(['browsedPeople']),
}
</script>

<style lang="scss">
.container {
  max-width: 600px;
  min-height: 600px;
  margin: 0 auto;
  border: 2px solid #eee;
  border-radius: 3px;
  box-shadow: 0 0 5px #eee;
  padding: 20px;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: 1px solid tomato;
    font-size: 14px;
    border-radius: 3px;
    padding: 10px 20px;
    outline: none;
    margin-bottom: 20px;

    &:focus {
      box-shadow: 0 0 3px tomato;
    }
  }

  button {
    border: none;
    border-radius: 3px;
    outline: none;
    color: #fff;
    font-size: 14px;
    background-color: tomato;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }
  }
}

.card {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid tomato;
  border-radius: 3px;

  a {
    color: tomato;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
