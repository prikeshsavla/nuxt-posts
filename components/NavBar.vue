<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="http://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
          />
        </a>
        <div
          class="navbar-burger burger"
          @click="toggleDropdown"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu" :class="{'is-active': isActive}"
      @click="toggleDropdown"
      >
        <div class="navbar-end">
          <div class="navbar-item has-dropdown" :class="{'is-active': isActive}">
            <a class="navbar-link" >
              Menu
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Dashboard
              </a>
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Settings
              </a>
              <hr class="navbar-divider" />
              <div class="navbar-item">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      isActive: false
    }
  },
  methods: {
    toggleDropdown(){
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped></style>
