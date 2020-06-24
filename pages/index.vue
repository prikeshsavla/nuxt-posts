<template>
  <div>
    <nav-bar />
    <!-- Navigation -->
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr />
                </div>
                <post-item
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.date"
                  :isRead="post.isRead"
                />
                </div>
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
        <!-- <form action="">

<input type="text" name="" id="" v-model="form.title">
<input type="text" name="" id="" v-model="form.subtitle">
      {{isFormValid()}}
        </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      title: "Heya",
      form:{
        title: 'some title',
        subtitle: 'subtitle'
      }
    };
  },
  computed:{
    // isFormValid(){
    //   console.log('is form valid called')
    //   return this.form.title ? true: false
    // },
    ...mapState({
      posts: (state) => state.posts
    })
  },
  methods: {
    // isFormValid(){
    //   console.log('is form valid called')
    //   return this.form.title ? true: false
    // },
  }
};
</script>

<style scoped>

</style>
