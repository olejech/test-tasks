<template>
  <div class="note">
    <button class="btn button-add">Добавить заметку</button>
    <div class="note-wrap">
      <h1>Поиск работы [id {{this.$route.params.id}}]</h1>
      <ul class="list">
        <li class="item">
          <a href="#" class="link">Найти работу</a>
          <button class="btn button-remove" @click="removeTodo">Удалить</button>
        </li>
        <li class="item">
          <a href="#" class="link">Получить деньги</a>
          <button class="btn button-remove" @click="removeTodo">Удалить</button>
        </li>
        <li class="item">
          <a href="#" class="link">Получить деньги</a>
          <button class="btn button-remove" @click="removeTodo">Удалить</button>
        </li>
        <li class="item">
          <a href="#" class="link">Получить деньги</a>
          <button class="btn button-remove" @click="removeTodo">Удалить</button>
        </li>
        <li class="item">
          <a href="#" class="link">Получить деньги</a>
          <button class="btn button-remove" @click="removeTodo">Удалить</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  methods: {
    removeTodo() {
      console.log('click');
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
  flex: 0 1 100%;
}
.button-remove {
  background: tomato;
  color: white;
}
.button-add {
  background: #42b983;
  color: white;
}
.note {
  max-width: 600px;
  margin: 0 auto;
  background: #eee;
  border-radius: 5px;
  padding: 20px;
}
.note-wrap {
  max-width: 100%;
  padding: 20px;
}
</style>
