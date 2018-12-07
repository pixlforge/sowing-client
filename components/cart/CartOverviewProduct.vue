<template>
  <tr class="rounded-lg shadow-md mt-40">

    <!-- Product featured image -->
    <td>
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt=""
        class="block w-full">
    </td>

    <!-- Name & description -->
    <td
      colspan="3"
      class="pl-30">
      <h3 class="text-26 text-green-darkest">
        {{ baseProductName }} &ndash; {{ variationType }} &ndash; {{ variationName }}
      </h3>
      <p class="text-15 text-grey-lighter font-semibold mt-20">
        {{ baseProductDescription }}
      </p>
    </td>

    <!-- Price -->
    <td class="text-center">
      <h5 class="text-12 text-grey-lightest uppercase">{{ labelPrice }}</h5>
      <div class="h-42 text-base text-green-darkest font-bold mt-20 flex justify-center items-center">
        {{ product.total.currency }} {{ product.total.amount }}
      </div>
    </td>

    <!-- Quantity -->
    <td class="text-center">
      <h5 class="text-12 text-grey-lightest uppercase">{{ labelQuantity }}</h5>
      <div class="relative mt-20">
        <select
          id="quantity"
          name="quantity"
          class="select">
          <option value="0">0</option>
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
    </td>

    <!-- Remove control -->
    <td class="text-center">
      Remove
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
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
  }
};
</script>
