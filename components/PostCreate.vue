<template>
  <modal @modalSubmitted="createPost">
    <template #actionButton>
      <a class="button is-danger is-block is-bold">
        <span class="compose">Create</span>
      </a>
    </template>
    <form class="post-form">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Awesome Title"
            v-model="form.title"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Awesome subtitle"
            v-model="form.subtitle"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Awesome Content"
            v-model="form.content"
          ></textarea>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        content: ""
      }
    };
  },
  methods: {
    resetForm() {
      this.form.title = "";
      this.form.subtitle = "";
      this.form.content = "";
    },
    createPost({ closeModal }) {
      this.$store.dispatch("post/createPost", {...this.form} );
      closeModal();
      this.resetForm();
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped></style>
