<template>
  <a :href="path">
    <button @click="handler" class="btn" :class="type">
      <span class="btn-text">{{ innerText }}</span>
    </button>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: { type: String },
    innerText: { type: String },
    path: { type: String },
    handler: { type: Function },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  height: 56px;
  width: 214px;
  text-align: center;
  text-decoration: none;
  border-radius: 33.5px;

  &__primary {
    background-color: $COLOR_PRIMARY;
    color: $COLOR_BTN_TEXT;
  }

  &__primary-small {
    background-color: $COLOR_PRIMARY;
    color: $COLOR_BTN_TEXT;
    width: 152px;
  }

  &__red {
    background-color: red;
    color: aqua;
  }
}
</style>
