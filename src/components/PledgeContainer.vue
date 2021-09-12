<template>
  <div class="pledge-container">
    <PledgeHeader />
    <PledgeStatistics />
    <PledgeSelection />
    <ModalContainer />
    <ModalSuccess />
    <MobileMenu :links="navLinks" />
  </div>
</template>

<script>
import PledgeHeader from "../components/PledgeHeader.vue";
import PledgeStatistics from "../components/PledgeStatistics.vue";
import PledgeSelection from "../components/PledgeSelection.vue";
import ModalContainer from "../components/ModalContainer.vue";
import ModalSuccess from "./ModalSuccess.vue";
import MobileMenu from "../components/_navigation/MobileMenu.vue";

export default {
  name: "PledgeContainer",
  components: {
    PledgeHeader,
    PledgeStatistics,
    PledgeSelection,
    ModalContainer,
    ModalSuccess,
    MobileMenu,
  },

  data() {
    return {
      navLinks: [
        { name: "Home", url: "/" },
        { name: "Discover", url: "/" },
        { name: "Contact us", url: "/" },
      ],
    };
  },
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
