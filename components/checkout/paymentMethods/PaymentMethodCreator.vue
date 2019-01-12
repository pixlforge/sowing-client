<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <button
      v-if="!showing"
      class="bg-grey-lightest hover:bg-green transition text-white w-80 h-80 rounded-full p-0"
      @click.prevent="showing = true">
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="text-36"/>
    </button>
    <form
      v-show="showing"
      class="w-full h-full flex flex-col items-center"
      @submit.prevent="store">
      <div class="w-full mt-20">
        <label
          for="elements"
          class="block text-14 leading-normal mb-20">
          {{ $t("stripe.add_a_card") }}
        </label>
        <div
          id="elements"
          class="bg-green-lightest rounded-lg pl-10 py-10"/>
      </div>
      <div class="flex mt-20">
        <button
          :disabled="storing"
          :class="{ 'btn-disabled': storing }"
          type="submit"
          class="btn btn-primary mr-10">
          {{ $t("buttons.add") }}
        </button>
        <button
          :disabled="storing"
          type="submit"
          class="btn"
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
    this.stripe = Stripe(process.env.STRIPE_PUBLIC_KEY);

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
