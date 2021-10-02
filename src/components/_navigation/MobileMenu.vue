<template>
  <transition name="slide-fade">
    <div class="modal">
      <div @click="openMobileMenu" class="modal__backdrop">
        <div class="mobile-menu">
          <ul class="mobile-menu__list">
            <li
              v-for="(link, index) in allLinks"
              :key="index"
              class="mobile-menu__item"
            >
              <a :href="link.url">
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    links: { type: Array },
  },
  computed: {
    ...mapGetters(["allLinks"]),
  },

  methods: {
    ...mapActions(["fetchLinks", "openMobileMenu"]),
  },

  created() {
    this.fetchLinks();
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  min-height: 70px;
  width: 327px;
  margin: 90px auto;
  background-color: white;
  border-radius: 10px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  &__list {
    width: 100%;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    min-width: 100%;
    height: 70px;
    border-bottom: 1px solid $COLOR_BORDER-LIGHT;

    &:last-child {
      border-radius: 0 0 10px 10px;
      border: none;
    }
    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    a {
      width: 100%;
      height: 100%;
      margin-left: 24px;
      text-align: left;

      span {
        display: inline-block;
        margin-top: 24px;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
