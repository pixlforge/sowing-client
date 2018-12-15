<template>
  <div class="rounded-lg shadow-lg flex flex-col">
    <div class="flex flex-col lg:flex-row">

      <!-- Product featured image -->
      <div class="w-full lg:w-1/2">
        <img
          :src="imgUrl"
          :alt="imgAlt"
          class="block rounded-tl-lg">
      </div>

      <!-- Product content -->
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-30">

        <!-- Base product name -->
        <h2 class="text-48 font-bold text-green-darkest">
          {{ productName }}
        </h2>

        <!-- Base product description -->
        <p class="text-20 font-semibold text-grey-lighter leading-normal mt-40">
          {{ productDescription }}
        </p>

        <!-- Base product price and currency -->
        <div class="flex items-start mt-40">
          <span class="product-currency">{{ productCurrency }}</span>
          <span class="product-price">{{ productPrice }}</span>
        </div>

        <!-- Total products in stock -->
        <div
          v-if="product.in_stock"
          class="flex items-start text-16 text-green-darkest mt-40">
          <font-awesome-icon
            :icon="['far', 'boxes']"
            class="text-green mr-10"/>
          <span class="font-bold mr-5">{{ product.stock_count }}</span>
          <span>{{ productsRemaining }}</span>
        </div>

        <!-- Product is out of stock -->
        <div
          v-else
          class="flex items-start text-16 text-red mt-40">
          <font-awesome-icon
            :icon="['far', 'boxes']"
            class="mr-10"/>
          <span class="font-bold">{{ productOutOfStock }}</span>
        </div>

        <form
          class="w-full md:w-3/4 xxl:w-1/2 mt-20"
          @submit.prevent>
          
          <!-- Variations -->
          <Variation
            v-for="(variations, type) in product.variations"
            :key="type"
            :type="type"
            :variations="variations"
            v-model="form.variation"
            class="mt-20"/>

          <!-- Quantity -->
          <div
            v-if="form.variation"
            class="mt-20">
            <label
              for="quantity"
              class="label">
              {{ quantityLabel }}
            </label>
            <div class="relative">
              <select
                id="quantity"
                v-model="form.quantity"
                name="quantity"
                class="select">
                <option
                  v-for="n in parseInt(form.variation.stock_count)"
                  :key="n"
                  :value="n">
                  {{ n }}
                </option>
              </select>
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                class="select-caret"/>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="btn btn-primary mx-auto lg:mx-0 mt-20">
              <font-awesome-icon
                :icon="['far', 'cart-plus']"
                class="mr-10"/>
              {{ $t("components.variations.buttons.add_to_cart") }}
            </button>
          </div>

        </form>

      </div>
    </div>

    <!-- Additional product images -->
    <div class="w-full bg-green-lightest flex flex-wrap items-center px-20 pb-40">
      <img
        v-for="n in 13"
        :key="n"
        :src="imgUrl"
        :alt="imgAlt"
        class="w-1/2 md:w-1/3 xl:w-1/5 border-l-10 sm:border-l-20 border-r-10 sm:border-r-20 border-green-lightest mt-40">
    </div>

  </div>
</template>

<script>
import Variation from "@/components/products/Variation";
import { mapGetters } from "vuex";

export default {
  components: {
    Variation
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        variation: "",
        quantity: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    imgUrl() {
      return `https://bulma.io/images/placeholders/1280x960.png`;
    },
    imgAlt() {
      return this.$t("components.products.img.alt");
    },
    productName() {
      return this.product.name[this.locale];
    },
    productDescription() {
      return this.product.description[this.locale];
    },
    productCurrency() {
      return this.product.price.currency;
    },
    productPrice() {
      return this.product.price.amount;
    },
    quantityLabel() {
      return this.$t("components.variations.labels.quantity");
    },
    productsRemaining() {
      return this.$t("components.products.details.remaining");
    },
    productOutOfStock() {
      return this.$t("components.products.details.out_of_stock");
    }
  },
  watch: {
    "form.variation"() {
      this.form.quantity = 1;
    }
  }
};
</script>

