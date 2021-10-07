<template>
  <div class="pledge-container">
    <PledgeHeader />
    <PledgeStatistics />
    <PledgeSelection />
    <ModalSelection />
    <ModalSuccess />
    <MobileMenu v-show="showMenu" />
  </div>
</template>

<script>
import PledgeHeader from "../components/PledgeHeader.vue";
import PledgeStatistics from "../components/PledgeStatistics.vue";
import PledgeSelection from "../components/PledgeSelection.vue";
import ModalSelection from "./ModalSelection.vue";
import ModalSuccess from "./ModalSuccess.vue";
import MobileMenu from "../components/_navigation/MobileMenu.vue";

import { mapState } from "vuex";

export default {
  name: "PledgeContainer",
  components: {
    PledgeHeader,
    PledgeStatistics,
    PledgeSelection,
    ModalSelection,
    ModalSuccess,
    MobileMenu,
  },

  computed: {
    ...mapState({
      showMenu: (state) => state.pledge.showMenu,
    }),
  },

  created() {},
};
</script>

<style lang="scss" scoped>
.pledge-container {
  position: relative;
  top: -56px;
  min-height: 2399px;
  width: 327px;
  margin: 0 auto;
}
</style>
