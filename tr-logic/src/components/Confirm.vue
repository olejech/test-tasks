<template>
  <Modal heading="Подтвердите действие" :isOpenModal="isOpenModal">
    <template #body>
      <h3>Вы подтверждаете действие?</h3>
    </template>

    <template #footer>
      <button class="btn btn-cancel" @click="closeModal">Отмена</button>
      <button class="btn btn-add" @click="confirm">Да</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  props: ['isOpenModal'],
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    closeModal() {
      this.$emit('cancel');
    },
  },
};
</script>
