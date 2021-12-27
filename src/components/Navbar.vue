<template>
  <div id="navbar">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm px-5">
      <a class="navbar-brand" href="#"
        ><img
          src="https://www.intime.digital/static/landing/img/svg/logo.svg"
          class="d-inline-block align-top"
          width="104"
          height="54"
          alt="Brand Logo"
      />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#about" v-smooth-scroll>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#m-app" v-smooth-scroll>App</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" v-smooth-scroll>Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Our Products
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" target="_blank" rel="noreferrer" href="https://www.intime.digital/web">Web</a>
              <a class="dropdown-item" target="_blank" rel="noreferrer" href="https://www.intime.digital/web">Resort</a>
              <a class="dropdown-item" target="_blank" rel="noreferrer" href="https://longevitycoin.org/">Coin</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navbar {
    height: 80px;
  }
</style>
