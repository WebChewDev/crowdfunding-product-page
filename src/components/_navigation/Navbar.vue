<template>
  <!-- <div class="container"> -->
  <nav class="navbar">
    <brand-logo />

    <!-- nav -->
    <ul class="navbar__menu">
      <li v-for="(nav, index) in navLinks" :key="index" class="navbar__item">
        <a :href="nav.url" class="navbar__link"> {{ nav.name }}</a>
      </li>
    </ul>

    <!--nav-mobile -->
    <navicon></navicon>
  </nav>
  <!-- </div> -->
</template>

<script>
import BrandLogo from "../_ui-elements/BrandLogo.vue";
import Navicon from "../_ui-elements/Navicon.vue";

export default {
  name: "Navbar",
  props: {
    links: { type: Array },
  },

  components: {
    "brand-logo": BrandLogo,
    navicon: Navicon,
  },

  data() {
    return {
      navLinks: this.links,
    };
  },

  methods: {
    getData() {
      return console.log(this.navlinks);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 32px 24px;
  color: $COLOR_PRIMARY;

  &__menu {
    display: none;
    flex-direction: row;

    @include mq($from: tablet) {
      display: flex;
    }
  }

  /* &__link {
  }  */
}
</style>
