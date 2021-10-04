<template>
  <div v-if="showModal" class="modal">
    <div @click="openModal" class="modal__backdrop"></div>
    <div class="modal__container">
      <Card class="scroll" :content="allOptions" />
    </div>
  </div>
</template>

<script>
import Card from "../components/_common/Card.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "ModalContainer",
  components: { Card },
  computed: {
    ...mapGetters(["allOptions"]),
    ...mapState({
      showModal: (state) => state.pledge.showModal,
    }),
  },
  methods: {
    ...mapActions(["fetchOptions", "openModal"]),
  },
  watch: {
    showModal() {
      this.showModal
        ? (document.body.style = "overflow:hidden")
        : (document.body.style = "");
    },
  },
  created() {
    this.fetchOptions();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__modal__backdrop {
    overflow-y: initial;
  }

  &__container {
    position: relative;
    width: 327px;
    margin: 50px auto;
    border-radius: 8px;
    background-color: $COLOR_BG_CARD;
    border: 1px solid $COLOR_BORDER-LIGHT;
    padding: 31px 24px;
    overflow-y: scroll;
    z-index: 100;
  }
}
</style>
