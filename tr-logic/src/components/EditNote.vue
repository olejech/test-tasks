<template>
  <Modal heading="Изменить заметку" :isOpenModal="isOpenModal">
    <template #body>
      <label for="note" class="modal__label">Название заметки</label>
      <input type="text" name="note" id="note" class="modal__input" v-model.trim="note.title" />

      <label for="textarea" class="modal__label">Список задач (каждая с новой строки)</label>
      <textarea
        name="textarea"
        id="textarea"
        cols="20"
        rows="5"
        class="modal__textarea"
        v-model="todosList"
      ></textarea>
    </template>

    <template #footer>
      <button class="btn btn-cancel" @click="closeModal">Отмена</button>
      <button class="btn btn-add" @click="saveNote">Сохранить</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  props: ['isOpenModal', 'note'],
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    closeModal() {
      this.$emit('cancel');
    },
  },
  computed: {
    todosList() {
      return this.note.todos.map(todo => todo.title).join('\n');
    },
  },
};
</script>

<style>
</style>
