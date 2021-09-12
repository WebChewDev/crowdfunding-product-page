<template>
  <div class="pledge-statistics">
    <div v-for="(item, index) in getStatistics" :key="index">
      <div class="pledge-statistics__value quantity--large">
        {{ item.value }}
      </div>
      <p class="pledge-statistics__label stats-label">{{ item.label }}</p>

      <div v-if="index > 1 ? false : true" class="divider"></div>
    </div>

    progress bar
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PledgeStatistics",
  computed: mapGetters(["getStatistics"]),
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
