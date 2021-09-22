<template>
  <transition>
    <div v-if="show" class="modal">
      <div class="modal__backdrop">
        <div class="modal-container">
          <Card :content="allOptions" :modal="show" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Card from "../components/_common/Card.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ModalContainer",
  components: { Card },
  computed: mapGetters(["allOptions"]),
  methods: {
    ...mapActions(["fetchOptions"]),
  },
  created() {
    this.fetchOptions();
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: relative;
  width: 327px;
  margin: 50px auto;
  border-radius: 8px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;
  padding: 31px 24px;
}
</style>
