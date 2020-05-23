<template>
  <Modal heading="Изменить заметку" :isOpenModal="isOpenModal">
    <template #body>
      <label for="note" class="modal__label">Название заметки</label>
      <input type="text" name="note" id="note" class="modal__input" v-model.trim="title" />
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
  data() {
    return {
      title: this.note.title,
    };
  },
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    closeModal() {
      this.$emit('cancel');
    },
    saveNote() {
      this.$store.dispatch('changeNameNote', {
        noteId: this.note.id,
        title: this.title,
      });
      this.$emit('close');
    },
  },
};
</script>

<style>
</style>
