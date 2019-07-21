<template>
  <div class="payment-method-creator__container">
    <button
      v-if="!showing"
      class="payment-method-creator__button"
      @click.prevent="showing = true">
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="payment-method-creator__button-icon"/>
    </button>
    <form
      v-show="showing"
      class="payment-method-creator__form"
      @submit.prevent="store">
      <div class="payment-method-creator__form-body">
        <label
          for="elements"
          class="payment-method-creator__label">
          {{ $t("stripe.add_a_card") }}
        </label>
        <div
          id="elements"
          class="payment-method-creator__input"/>
      </div>
      <div class="payment-method-creator__controls">
        <button
          :disabled="storing"
          :class="{ 'btn-disabled': storing }"
          type="submit"
          class="button button__primary button--spaced-right">
          {{ $t("buttons.add") }}
        </button>
        <button
          :disabled="storing"
          type="submit"
          class="button"
          @click.prevent="showing = false">
          {{ $t("buttons.cancel") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      storing: false,
      showing: false,
      stripe: {},
      card: {},
      options: {
        style: {
          base: {
            fontSize: "16px",
            iconColor: "#8D8D8D"
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  },
  mounted() {
    this.stripe = Stripe(process.env.STRIPE_PUBLIC);

    this.card = this.stripe
      .elements({ locale: this.locale })
      .create("card", this.options);
    this.card.mount("#elements");
  },
  methods: {
    async store() {
      this.storing = true;
      const { token, error } = await this.stripe.createToken(this.card);

      if (error) {
        this.$toast.error(this.$t("toasts.general_error"));
      } else {
        let res = await this.$axios.$post("/payment-methods", {
          token: token.id
        });
        this.$toast.success(this.$t("toasts.cc_added"));
        this.$emit("payment-method:added", res.data);
        this.card.clear();
        this.showing = false;
      }

      this.storing = false;
    }
  }
};
</script>
