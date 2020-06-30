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
                <div v-if="posts && posts.length > 0">
                <post-item
                  v-for="post in posts"
                  :key="post._id"
                  :id="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                  :isRead="post.isRead"
                />
                </div>
                <p v-else>No Post Found</p>
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
import {fetchPostsAPI} from '~/store/post'
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
  fetch({store}){
     if(store.getters['post/hasEmptyItems']){
       console.log("fetch in index page")
        return store.dispatch("post/fetchPosts");
    }
  },
  mounted(){
      // if(store.getters())
      this.$store.dispatch("post/fetchArchivedPosts");
  },
  computed:{

   posts(){
     return this.$store.state.post.items
   },
   archivedPosts(){
     return this.$store.state.post.archivedPosts
   }
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
