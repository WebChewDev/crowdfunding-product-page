<template>
  <div class="pledge-statistics">
    <div v-for="(item, index) in allStatistics" :key="index">
      <div class="pledge-statistics__value quantity--large">
        {{ getCurrency(index, item.value) }}
      </div>
      <p class="pledge-statistics__label stats-label">{{ item.label }}</p>

      <div v-if="index > 1 ? false : true" class="divider"></div>
    </div>

    progress bar
    <button @click="log">click</button>
  </div>
</template>
ß
<script>
import { mapGetters, mapActions } from "vuex";
import { currency } from "../helpers/currency";

export default {
  name: "PledgeStatistics",
  computed: {
    ...mapGetters(["allStatistics"]),
  },
  methods: {
    ...mapActions(["fetchStatistics"]),
    getCurrency: (index, value) => {
      const pound = index <= 0 ? "£" : "";

      return currency(value, pound, 0);
    },
  },

  created() {
    this.fetchStatistics();
  },
};
</script>

<style lang="scss" scoped>
.pledge-statistics {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 32px 24px 40px;
  border-radius: 8px;
  background-color: $COLOR_BG_CARD;

  border: 1px solid $COLOR_BORDER-LIGHT;

  &__value {
    margin-bottom: 9px;
  }

  &__label {
    text-align: center;
  }
}

.divider {
  width: 80px;
  margin: 24px auto;
  height: 1px;
  background-color: $COLOR_BORDER_DIVIDER;
  opacity: 40%;
}

.hide {
  display: none;
}
</style>
