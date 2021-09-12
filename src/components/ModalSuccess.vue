<template>
  <transition name="slide-fade">
    <div class="modal" v-if="showSuccess">
      <div class="modal__backdrop">
        <div class="model-success">
          <SuccessIcon class="model-success__icon" />
          <h2 class="model-success__heading">Thanks for your support!</h2>
          <p class="body model-success__body">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <Button :type="'btn btn__primary-small'" :innerText="'Got it!'" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SuccessIcon from "../components/_ui-elements/SuccessIcon.vue";
import Button from "../components/_common/Button.vue";

export default {
  name: "ModalSuccess",
  components: {
    SuccessIcon,
    Button,
  },
  created() {},
  data() {
    return {
      showSuccess: false,
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.model-success {
  position: absolute;
  left: 24px;
  top: 143px;
  width: 327px;
  height: 382px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;
  padding: 31px 24px;

  &__icon {
    margin-bottom: 24px;
  }

  &__heading {
    margin-bottom: 24px;
  }

  &__body {
    margin-bottom: 24px;
  }
}
</style>
