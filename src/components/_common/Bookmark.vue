<template>
  <div
    @click="onClick"
    class="bookmark"
    :class="this.isDisabled ? 'active' : ''"
  >
    <bookmark-icon :color="iconColor" />
  </div>
</template>

<script>
import BookmarkIcon from "../_ui-elements/BookmarkIcon.vue";
export default {
  name: "Bookmark",
  components: {
    "bookmark-icon": BookmarkIcon,
  },
  data() {
    return {
      isDisabled: false,
      disabled: this.setDisabled,
      iconColor: "white",
    };
  },
  methods: {
    onClick() {
      this.setIconColor();
      this.isDisabled = !this.isDisabled;
      console.log(this.iconColor);
    },
    setIconColor() {
      if (this.isDisabled) {
        return (this.iconColor = "white");
      }
      return (this.iconColor = "green");
    },
  },
};
</script>

<style lang="scss" scoped>
/* active */
.bookmark {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: $COLOR_BLACK_OFF;
  color: white;
}

.active {
  background-color: $COLOR_PRIMARY;
}

.disabled {
  background-color: grey;
}
</style>
