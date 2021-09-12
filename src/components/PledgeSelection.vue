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
    <Card :content="getOptions" :enableBtn="true" />
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
      show: false,
    };
  },
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
