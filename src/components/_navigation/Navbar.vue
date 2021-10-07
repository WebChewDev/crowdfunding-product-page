<template>
  <nav class="navbar">
    <BrandLogo />
    <ul class="navbar__menu">
      <li v-for="(link, index) in allLinks" :key="index" class="navbar__item">
        <a :href="link.url" class="navbar__link"> {{ link.name }}</a>
      </li>
    </ul>
    <Navicon :handleClick="openMobileMenu" />
  </nav>
</template>

<script>
import BrandLogo from "../_ui-elements/BrandLogo.vue";
import Navicon from "../_ui-elements/Navicon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  props: {
    links: { type: Array },
  },

  components: {
    BrandLogo,
    Navicon,
  },

  computed: {
    ...mapGetters(["allLinks", "allOptions"]),
  },

  methods: {
    ...mapActions(["openMobileMenu", "fetchLinks"]),
  },

  created() {
    this.fetchLinks();
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
}
</style>
