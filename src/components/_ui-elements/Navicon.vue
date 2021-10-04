<template>
  <button
    @click="handleClick"
    :class="{ change: showMenu }"
    class="mobile-menu-icon"
  >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    handleClick: Function,
  },
  computed: {
    ...mapState({
      showMenu: (state) => state.pledge.showMenu,
    }),
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu-icon {
  width: 40px;
  height: 15px;

  @include mq($from: tablet) {
    display: none;
  }
}

.bar1,
.bar2,
.bar3 {
  width: 16px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: rotate(-45deg) translate(-2px, 2px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: rotate(45deg) translate(-7px, -6px);
}
</style>
