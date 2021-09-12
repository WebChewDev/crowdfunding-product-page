<template>
  <div class="container">
    <Header />
    <PledgeContainer />
  </div>
</template>

<script>
import Header from "../components/_navigation/Header.vue";
import PledgeContainer from "../components/PledgeContainer.vue";

export default {
  name: "Home",
  components: {
    Header,
    PledgeContainer,
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  min-height: 2719px;
  background-color: $COLOR_BG;
}
</style>
