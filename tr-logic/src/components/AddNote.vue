<template>
  <div>
    <button class="btn btn-add" @click="openModal">{{buttonTitle}}</button>

    <Modal heading="Добавить новую заметку" :isOpenModal="isOpenModal">
      <template #body>
        <template v-if="type === 'note'">
          <label for="note" class="modal__label">Название заметки</label>
          <input type="text" name="note" id="note" class="modal__input" v-model.trim="title" />
        </template>

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
        <button v-if="type === 'note'" class="btn btn-add" @click="addNote">Добавить заметку</button>
        <button v-if="type === 'todos'" class="btn btn-add" @click="addTodos">Добавить задачи</button>
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
  props: ['buttonTitle', 'type', 'noteId'],
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
      if (!this.title || !this.textarea.length) {
        return;
      }
      this.$store.dispatch('addNote', {
        title: this.title,
        textarea: this.textarea,
      });
      this.title = '';
      this.textarea = '';
      this.isOpenModal = false;
    },
    addTodos() {
      if (!this.title || !this.textarea.length) {
        return;
      }
      this.$store.dispatch('addTodos', {
        noteId: this.noteId,
        textarea: this.textarea,
      });
      this.textarea = '';
      this.isOpenModal = false;
    },
  },
};
</script>
