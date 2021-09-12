<template>
  <div class="pledge-selection">
    <h2>About this project</h2>
    <p>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
      elevates your screen to a more comfortable viewing height. Placing your
      monitor at eye level has the potential to improve your posture and make
      you more comfortable while at work, helping you stay focused on the task
      at hand.
    </p>
    <p>
      Featuring artisan craftsmanship, the simplicity of design creates extra
      desk space below your computer to allow notepads, pens, and USB sticks to
      be stored under the stand.
    </p>
    <!-- pledge card x3 -->
    <Card :modal="false" :enableBtn="true" />
  </div>
</template>

<script>
import Card from "./_common/Card.vue";
import { mapGetters } from "vuex";

export default {
  name: "PledgeSelection",
  components: {
    Card,
  },
  computed: mapGetters(["getOptions"]),
  data() {
    return {
      options: [
        {
          title: "Bamboo Stand",
          linkText: "Pledge $25 or more",
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          quantity: 101,
          url: "/",
        },
        {
          title: "Black Edition Stand",
          linkText: "Pledge $75 or more",
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          quantity: 64,
        },
        {
          title: "Mahogany Special Edition",
          linkText: "Pledge $200 or more",
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          quantity: 0,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.pledge-selection {
  width: 100%;
  padding: 40px 25px;
  border-radius: 8px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;

  h2 {
    text-align: left;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 38px;
  }

  p:last-child {
    margin-bottom: 24px;
  }
}
</style>
