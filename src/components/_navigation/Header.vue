<template>
  <header class="header">
    <Navbar :links="navLinks" />
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Header",
  components: {
    Navbar,
  },
  data() {
    return {
      navLinks: [
        { name: "Home", url: "/" },
        { name: "About", url: "/" },
        { name: "Contact us", url: "/" },
      ],
    };
  },
};
</script>

<style lang="scss" scopted>
.header {
  position: relative;
  /* min-width: 375px; */
  height: 300px;
  background-image: url();
  background-size: cover;
  /* padding: 32px 0 0 0; */
  background: url("../../assets/header-background.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  img {
    height: 400px;
  }
}
</style>
