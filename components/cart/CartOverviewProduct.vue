<template>
  <div class="relative rounded-lg shadow-md flex items-center p-30 mt-40">

    <!-- Product featured image -->
    <div class="w-1/5">
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt=""
        class="block w-full rounded-lg">
    </div>

    <!-- Name & description -->
    <div class="w-2/5 pl-30">
      <h3 class="text-24 text-green-darkest font-extrabold">
        {{ baseProductName }} &ndash; {{ variationType }} &ndash; {{ variationName }}
      </h3>
      
      <p class="text-16 text-grey-lighter font-semibold leading-normal mt-20">
        {{ baseProductDescription }}
      </p>
    </div>

    <!-- Price -->
    <div class="w-1/5 text-center px-20">
      <h5 class="text-12 text-grey-lightest uppercase">{{ labelPrice }}</h5>

      <div class="h-42 text-16 text-green-darkest font-bold mt-20 flex justify-center items-center">
        {{ product.total.currency }} {{ product.total.amount }}
      </div>
    </div>

    <!-- Quantity -->
    <div class="w-1/5 text-center px-20">
      <h5 class="text-12 text-grey-lightest uppercase">{{ labelQuantity }}</h5>

      <div class="relative mt-20">
        <select
          id="quantity"
          v-model="quantity"
          name="quantity"
          class="select">
          <option
            v-if="product.quantity == 0"
            value="0"
            disabled>
            0
          </option>
          <option
            v-for="n in parseInt(product.stock_count)"
            :key="n"
            :value="n"
            :selected="n == product.quantity">
            {{ n }}
          </option>
        </select>
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          class="select-caret"/>
      </div>
    </div>

    <!-- Remove control -->
    <button
      role="button"
      title="Remove"
      class="absolute pin-t pin-r mt-20 mr-20"
      @click="destroy(product.id)">
      <font-awesome-icon
        :icon="['far', 'times']"
        class="text-20 text-grey-lightest hover:text-red transition cursor-pointer"/>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: this.product.quantity
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    labelPrice() {
      return this.$t("components.cart.labels.price");
    },
    labelQuantity() {
      return this.$t("components.cart.labels.quantity");
    },
    baseProductName() {
      return this.product.product.name[this.locale];
    },
    baseProductDescription() {
      return this.product.product.description[this.locale];
    },
    variationName() {
      return this.product.name[this.locale];
    },
    variationDescription() {
      return this.product.description[this.locale];
    },
    variationType() {
      return this.product.type.name[this.locale];
    }
  },
  watch: {
    quantity(quantity) {
      this.update({ productId: this.product.id, quantity: this.quantity });
    }
  },
  methods: {
    ...mapActions({
      destroy: "cart/destroy",
      update: "cart/update"
    })
  }
};
</script>
