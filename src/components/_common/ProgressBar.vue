<template>
  <div class="progress">
    <div class="progress__bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  width: 279px;
  height: 12px;
  overflow: hidden;
  background-color: $COLOR_BG_BAR;
  margin: 32px auto 0;
  border-radius: 33px;

  &__bar {
    height: 100%;
    background-color: $COLOR_PRIMARY;
    border-radius: 33px;
  }
}
</style>
