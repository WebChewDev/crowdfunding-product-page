<template>
  <div v-for="(item, index) in content" :key="index" class="pledge-card">
    <h3>{{ item.title }}</h3>
    <a class="link-text pledge-card__link" :href="item.url">
      {{ item.linkText }}
    </a>
    <p>{{ item.description }}</p>
    <div :class="{ hide: !item.hasLabel }" class="pledge-card__group">
      <div
        :class="{ 'quantity--small': modal }"
        class="quantity--large pledge-card__quantity"
      >
        {{ item.quantity }}
      </div>
      <span v-if="item.hasLabel" class="stats-label pledge-card__label"
        >left</span
      >
    </div>
    <Button
      v-if="enableBtn"
      :type="'btn btn__primary-small'"
      :innerText="'Select Reward'"
      @click="log(index)"
    />
  </div>
</template>

<script>
import Button from "./Button.vue";
import { mapGetters } from "vuex";

export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    content: Array,
    enableBtn: Boolean,
    modal: Boolean,
    url: String,
  },
  computed: mapGetters(["getOptions"]),
  methods: {
    log(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.pledge-card {
  min-width: 279px;
  border-radius: 8px;
  padding: 24px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;
  margin-bottom: 24px;

  button {
    margin: 0 -20px 0 0;
  }

  h3 {
    text-align: left;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 24px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: left;
    margin-bottom: 24px;
  }

  &__group {
    /* min-width: 72px; */
    margin-bottom: 24px;
    text-align: left;
  }

  &__quantity {
    display: inline-block;
    margin-right: 8px;
  }

  &__label {
    display: inline-block;
  }
}

.pledge-card:last-child {
  margin: 0;
}

.hide {
  display: none;
}
</style>
