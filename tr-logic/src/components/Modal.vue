<template>
  <div class="wrap">
    <div v-if="isOpenModal" class="modal">
      <h2 class="modal__title">{{heading}}</h2>

      <div class="modal__body">
        <slot name="body"></slot>
      </div>

      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>

    <div v-if="isOpenModal" class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['heading', 'isOpenModal'],
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 600px;
  width: calc(100% - 60px);
  height: 100%;
  max-height: 350px;
  z-index: 2;
  background: rgb(204, 204, 204);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  &__title {
    margin: 0 0 20px 0;
  }

  &__body {
    flex: 0 1 100%;
  }

  &__label {
    display: block;
    margin-bottom: 5px;
  }

  &__input {
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

  &__footer {
    display: flex;
    justify-content: flex-end;
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
}
</style>
