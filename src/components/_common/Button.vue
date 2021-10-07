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
  min-width: 214px;
  text-align: center;
  text-decoration: none;
  border-radius: 33.5px;
}

.btn-medium {
  height: 48px;
  min-width: 152px;
}

.btn-small {
  height: 48px;
  min-width: 115px;
}

.primary {
  background-color: $COLOR_PRIMARY;
  color: $COLOR_BTN_TEXT;
}

.disabled {
  background-color: $COLOR_BTN_DISABLED;
  color: $COLOR_BTN_TEXT;
}
</style>
