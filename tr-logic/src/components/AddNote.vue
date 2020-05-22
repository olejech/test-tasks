<template>
  <div>
    <button class="btn btn-add" @click="openModal">Добавить заметку</button>

    <Modal heading="Добавить новую заметку" :isOpenModal="isOpenModal">
      <template #body>
        <label for="note" class="modal__label">Название заметки</label>
        <input type="text" name="note" id="note" class="modal__input" v-model.trim="title" />

        <label for="textarea" class="modal__label">Список задач (каждая с новой строки)</label>
        <textarea
          name="textarea"
          id="textarea"
          cols="20"
          rows="5"
          class="modal__textarea"
          v-model.trim="textarea"
        ></textarea>
      </template>

      <template #footer>
        <button class="btn btn-cancel" @click="closeModal">Отмена</button>
        <button class="btn btn-add" @click="addNote">Добавить</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'AddNote',
  components: {
    Modal,
  },
  data() {
    return {
      title: '',
      textarea: [],
      isOpenModal: false,
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    addNote() {
      this.$store.dispatch('addNote', {
        title: this.title,
        textarea: this.textarea,
      });
      this.title = '';
      this.textarea = '';
      this.isOpenModal = false;
    },
  },
};
</script>
