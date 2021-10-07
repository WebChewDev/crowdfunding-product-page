<template>
  <div class="pledge-header">
    <div class="pledge-header__icon">
      <BrandIcon />
    </div>
    <!-- heading -->

    <h1 class="pledge-header__heading">Mastercraft Bamboo Monitor Riser</h1>
    <div class="body">
      A beautifully handcrafted monitor stand to reduce neck and eye strain.
    </div>
    <div class="pledge-header__button-group">
      <Button
        type="primary"
        innerText="Back this project"
        url="https://www.youtube.com/watch?v=ElRTFYtlW84"
      />
      <Bookmark />
    </div>
  </div>
</template>

<script>
import BrandIcon from "../components/_ui-elements/BrandIcon.vue";
import Button from "./_common/Button.vue";
import Bookmark from "./_common/Bookmark.vue";

export default {
  name: "PledgeHeader",
  components: {
    BrandIcon,
    Button,
    Bookmark,
  },
};
</script>

<style lang="scss" scoped>
.pledge-header {
  position: relative;
  height: 284px;
  width: 100%;
  padding: 52px 24px 40px;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;

  &__icon {
    position: absolute;
    left: 135px;
    top: -29px;
  }
  &__heading {
    padding: 0 24px;
    margin-bottom: 16px;
  }

  &__button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
}
</style>
