<template>
  <transition>
    <div v-if="show" class="modal">
      <div class="modal__backdrop">
        <div class="modal-container">
          <Card :content="options" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Card from "../components/_common/Card.vue";

export default {
  name: "ModalContainer",
  components: { Card },
  data() {
    return {
      options: [
        {
          title: "Pledge with no reward",
          description:
            "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
          hasLabel: false,
        },
        {
          title: "Bamboo Stand",
          linkText: "Pledge $25 or more",
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          quantity: 101,
          url: "/",
          hasLabel: true,
        },
        {
          title: "Black Edition Stand",
          linkText: "Pledge $75 or more",
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          quantity: 64,
          hasLabel: true,
        },
        {
          title: "Mahogany Special Edition",
          linkText: "Pledge $200 or more",
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          quantity: 0,
          hasLabel: true,
        },
      ],
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
  /* height: 1359px; */
  border-radius: 8px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;
  padding: 31px 24px;
}
</style>
