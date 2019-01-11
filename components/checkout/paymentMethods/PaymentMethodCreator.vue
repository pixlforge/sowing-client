<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <button
      v-if="!showing"
      class="bg-grey-lightest text-white w-100 h-100 rounded-full p-0"
      @click.prevent="showing = true">
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="text-36"/>
    </button>
    <form
      v-show="showing"
      class="w-full h-full flex flex-col justify-between items-center"
      @submit.prevent="store">
      <div
        id="elements"
        class="w-full mt-80"/>
      <div class="flex">
        <button
          :disabled="storing"
          :class="{ 'btn-disabled': storing }"
          type="submit"
          class="btn btn-primary mr-10">
          <font-awesome-icon
            :icon="['far', 'plus']"
            class="mr-5"/>
          {{ $t("buttons.add") }}
        </button>
        <button
          :disabled="storing"
          type="submit"
          class="btn btn-default"
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
            fontSize: "16px"
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
        //
      } else {
        let res = await this.$axios.$post("/payment-methods", {
          token: token.id
        });

        this.$emit("payment-method:added", res.data);
        this.card.clear();
      }

      this.showing = false;
      this.storing = false;
    }
  }
};
</script>
