<template>
  <div>
    <div class="modal" :class="{active: isOpenModal}">
      <h2 class="modal__title">Добавить новую заметку</h2>
      <label for="note" class="modal__label">Название заметки</label>
      <input type="text" name="note" id="note" class="modal__input" v-model.trim="note" />
      <label for="todos" class="modal__label">Список задач (каждая с новой строки)</label>
      <textarea
        name="todos"
        id="todos"
        cols="20"
        rows="5"
        class="modal__textarea"
        v-model.trim="textarea"
      ></textarea>
      <button class="btn button-cancel" @click="closeModal">Отмена</button>
      <button class="btn button-add" @click="addNote">Добавить</button>
    </div>
    <div class="overlay" :class="{active: isOpenModal}"></div>
  </div>
</template>

<script>
export default {
  name: 'AddNote',
  props: ['isOpenModal'],
  data() {
    return {
      note: '',
      textarea: [],
    };
  },
  methods: {
    closeModal() {
      console.log('close');
      this.$emit('closeModal');
    },
    addNote() {},
  },
};
</script>

<style lang="scss" scoped>
.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  max-width: 600px;
  height: 300px;
  z-index: 2;
  background: rgb(204, 204, 204);
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s;

  &__title {
    margin: 0 0 20px 0;
  }

  &__label {
    display: block;
    margin-bottom: 5px;
  }

  &__input {
    width: 100%;
    max-width: 300px;
    display: block;
    margin-bottom: 20px;
    border: 0;
    padding: 5px 10px;
    font-size: 18px;
  }

  &__textarea {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border: 0;
    font-size: 18px;
    resize: none;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
