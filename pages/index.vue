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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Heya",
      posts: [
        {
          _id: 1,
          title: "Heya",
          subtitle: "Hello",
          author: "Prik S",
          date: new Date(),
          isRead: true
        },
        {
          _id: 2,
          title: "Heya 2",
          subtitle: "Hello Again",
          author: "Prik S",
          date: new Date(),
          isRead: false
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
