<template>
  <div v-for="(item, index) in filteredContent" :key="index">
    <div class="card" :class="cardStyles(item)">
      <h3>{{ item.title }}</h3>
      <a class="card__link link-text" :href="item.url">
        {{ item.linkText }}
      </a>
      <p>{{ item.description }}</p>
      <div class="card__group">
        <div
          v-if="typeof item.quantity === 'number'"
          :class="{ 'quantity--small': isModal }"
          class="card__quantity quantity--large"
        >
          {{ item.quantity }}
        </div>
        <span
          v-if="typeof item.quantity === 'number'"
          class="stats-label card__label"
          >left</span
        >
      </div>
      <Button
        v-if="enableButton"
        :type="buttonStyles(item)"
        :innerText="'Select Reward'"
        :handler="openModal"
        @click="log(index)"
      />
    </div>
    <div v-if="enableForm" class="card__form" :class="formStyles">
      Enter your pledge
      <Button :type="'btn btn-small primary'" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { mapActions } from "vuex";

export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    content: Array,
    enableButton: Boolean,
    enableForm: Boolean,
    enableRadio: Boolean,
    isModal: Boolean,
  },
  computed: {
    // card styles on select

    formStyles() {
      return {
        "form-selected": this.enableForm,
      };
    },

    filteredContent() {
      return this.isModal
        ? this.content
        : this.content.filter((c) => c.id !== 0);
    },
  },
  methods: {
    ...mapActions(["openModal"]),
    log(e) {
      console.log(e);
    },
    cardStyles(item) {
      return {
        disabled: item.quantity === 0,
        selected: this.enableForm,
        "card-selected": this.enableForm,
        "card-not-selected": !this.enableForm,
      };
    },
    buttonStyles(item) {
      return item.quantity === 0
        ? "btn btn-medium disabled"
        : "btn btn-medium primary";
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 279px;
  border-radius: 8px 8px 8px 8px;
  padding: 24px;
  background-color: $COLOR_BG_CARD;
  border: 1px solid $COLOR_BORDER-LIGHT;

  /* &:last-child {
    margin: 0;
  } */

  button {
    margin: 0 -20px 0 0;
  }

  h3 {
    text-align: left;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 24px;
    text-align: left;
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

  &__form {
    width: 100%;
    border: 1px solid $COLOR_BORDER-LIGHT;
    padding: 24px;
    min-width: 279px;
    border-radius: 0 0 8px 8px;
    margin-bottom: 24px;
  }
}

/**
* state styles
*/

.hide {
  display: none;
}

.card-selected {
  border-radius: 8px 8px 0px 0px;
  border: 2px solid $COLOR_PRIMARY;
  border-bottom: 0;
}

.card-not-selected {
  margin-bottom: 24px;
}

.form-selected {
  border: 2px solid $COLOR_PRIMARY;
  border-top-color: $COLOR_BORDER-LIGHT;
  border-top-width: 1px;
}

/* .card:last-child {
  margin-bottom: 0;
} */

.active-body {
  border: 2px solid $COLOR_PRIMARY;
  border-bottom: 0;
}

.active-form {
  border: 2px solid $COLOR_PRIMARY;
  border-top: 1px solid $COLOR_BORDER-LIGHT;
}

.disabled {
  opacity: 0.5;
}
</style>
