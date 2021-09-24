<template>
  <button @click="handleClick" class="mobile-menu-icon">
    <span class="mobile-menu-icon__bar"></span>
    <span class="mobile-menu-icon__bar middle"></span>
    <span class="mobile-menu-icon__bar"></span>
  </button>
</template>

<script>
export default {
  props: {
    handleClick: Function,
  },

  created() {},
};
</script>

<style lang="scss" scoped>
.mobile-menu-icon {
  width: 16px;
  height: 15px;

  @include mq($from: tablet) {
    display: none;
  }

  &__bar {
    display: block;
    width: 16px;
    height: 3px;
    margin: 3px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }

  &:focus {
    span:first-child {
      transform-origin: 4px 5px;
      transform: rotate(45deg);
    }
    span:last-child {
      transform-origin: 0 10px;
      transform: rotate(-45deg);
    }
    .middle {
      display: none;
    }
  }
}
</style>
