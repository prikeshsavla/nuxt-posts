import INITIAL_DATA from "./initial_data.json";
import Vue from "vue";

export function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts);
    }, 0);
  });
}

export const state = () => {
  return {
    items: [],
    archivedPosts: [],
    item: {}
  };
};

// Spot to send request to a server usually actions resolve into some data
export const actions = {
  fetchPosts({ commit }) {
    return this.$axios.$get("/api/posts").then(({ posts }) => {
      commit("setPosts", posts);
      return posts;
    });
  },
  fetchPostById({ commit }, postId) {

    return this.$axios.$get(`/api/posts`).then(({ posts }) => {
      const selectedPost = posts.find(post => post._id === postId);
      console.log(selectedPost);
      commit("setPost", selectedPost);
      return selectedPost;
    });
  },
  createPost({ commit }, postData) {
    // Persist Post Data in store or Create post on server on persist data in some manner
    postData._id = Math.random()
      .toString(36)
      .substr(2, 7);
    postData.createdAt = new Date().getTime();
    postData.isRead = false;

    return this.$axios.$post("/api/posts", postData).then(res => {
      commit("addPost", postData);
    });
  },
  updatePost({ commit, state }, postData) {
    // Persist Post Data in store or Create post on server on persist data in some manner

    const index = state.items.findIndex(post => {
      return post._id === postData._id;
    });

    return this.$axios
      .$patch(`/api/posts/${postData._id}`, postData)
      .then(res => {
        commit("replacePost", { post: postData, index });
        return postData;
      });
  },
  deletePost({ commit, state }, postId) {
    const index = state.items.findIndex(post => {
      return post._id === postId;
    });

    return this.$axios.$delete(`/api/posts/${postId}`).then(res => {
      if (index !== -1) commit("removePost", index);
    });
  },
  fetchArchivedPosts({ commit }) {
    var archivedPosts = localStorage.getItem("archived_posts");
    if (archivedPosts) {
      commit("setArchivedPosts", JSON.parse(archivedPosts));
      return archivedPosts;
    } else {
      localStorage.setItem("archived_posts", JSON.stringify([]));
      commit("setArchivedPosts", []);
      return [];
    }
  },
  togglePost({ commit, state, dispatch }, postId) {
    if (state.archivedPosts.includes(postId)) {
      const index = state.archivedPosts.indexOf(postId);
      commit("removeArchivedPost", index);
    } else {
      commit("addArchivedPost", postId);
    }
    dispatch("persistArchivedPosts", state);
    return postId;
  },
  persistArchivedPosts({ state }) {
    localStorage.setItem("archived_posts", JSON.stringify(state.archivedPosts));
  }
};

// Mutatations are simple functions that access state. They are used to assign values in the state
export const mutations = {
  setPosts(state, posts) {
    state.items = posts;
  },
  addPost(state, post) {
    state.items.push(post);
  },
  replacePost(state, { post, index }) {
    Vue.set(state.items, index, post);
  },
  removePost(state, index) {
    Vue.delete(state.items, index);
  },
  setArchivedPosts(state, archivedPosts) {
    Vue.set(state.items, "archivedPosts", archivedPosts);
  },
  addArchivedPost(state, postId) {
    state.archivedPosts.push(postId);
  },
  removeArchivedPost(state, index) {
    Vue.delete(state.archivedPosts, index);
  },
  setPost(state, post) {
    state.item = post;
  }
};

// getters are like computed properties but for vuex
export const getters = {
  hasEmptyItems(state) {
    return state.items.length === 0;
  }
};
