<template>
  <div class="note">
    <button class="btn button-add" @click="openModal">Добавить заметку</button>
    <div class="note-wrap">
      <h1>Поиск работы [id {{this.$route.params.id}}]</h1>
      <ul class="list">
        <li class="item">
          <a href="#" class="link">Найти работу</a>
          <button class="btn button-change" @click="changeTodo">Изменить</button>
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

    <div class="modal" :class="{active: isOpenModal}">
      <h2>Добавить новую заметку</h2>
      <label for="note" class="modal__label">Название заметки</label>
      <input type="text" name="note" id="note" class="modal__input" />
      <label for="todos" class="modal__label">Список задач (каждая с новой строки)</label>
      <textarea name="todos" id cols="20" rows="5" class="modal__textarea"></textarea>
      <button class="btn button-cancel" @click="closeModal">Отмена</button>
      <button class="btn button-add" @click="addNote">Добавить</button>
    </div>
    <div class="overlay" :class="{active: isOpenModal}"></div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    openModal() {
      console.log('click');

      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    removeTodo() {
      console.log('click');
    },
    changeTodo() {
      console.log('click');
    },
    addNote() {
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
.button-change {
  background: #e4c92e;
  color: white;
  margin-right: 10px;
}
.button-cancel {
  background: darkRed;
  color: white;
  margin-right: 10px;
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
