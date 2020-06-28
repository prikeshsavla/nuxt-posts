<template>
  <div>
    <div @click="closeModal">
      <slot name="actionButton">
        <a class="button is-primary is-block is-bold">
          <span class="compose">Open</span>
        </a>
      </slot>
    </div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            class="delete"
            @click="closeModal"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="emitmodalSubmit">
            Save changes
          </button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    closeModal() {
      this.isActive = !this.isActive;
    },
    emitmodalSubmit() {
      console.log("Calling Emit Save");
      this.$emit("modalSubmitted", {closeModal: this.closeModal, dat: "Some"});
    }
  }
};
</script>

<style lang="scss" scoped></style>
