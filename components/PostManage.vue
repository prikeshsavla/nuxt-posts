<template>
  <div>
    <form class="post-form" v-if="postData._id" @submit.prevent="updatePost">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Awesome Title"
            v-model="post.title"
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
            v-model="post.subtitle"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Awesome Content"
            v-model="post.content"
          ></textarea>
        </div>
      </div>

      <button class="button is-primary">Update</button>

       <div class="markdown">
        <label for="" class="label">Content Preview</label>
        <div v-html="compiledMarkdown()">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["postData"],
  data() {
    return {
      post: { ...this.postData }
    };
  },
  watch: {
    postData(data, oldValue) {
      this.post = { ...data };
    }
  },
  methods: {
    updatePost() {
      this.$store.dispatch("post/updatePost", { ...this.post });
    },
    compiledMarkdown() {
      if (process.client) {
        return marked(this.post.content, { sanitize: true });
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
