<template>
  <div class="rounded-lg shadow-lg flex flex-col">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <img
          :src="imgUrl"
          :alt="imgAlt"
          class="block rounded-tl-lg">
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-30">

        <h2 class="text-46 font-bold text-green-darkest">{{ productName }}</h2>

        <p class="text-20 font-semibold text-grey-lighter leading-normal mt-40">{{ productDescription }}</p>

        <div class="flex items-start mt-40">
          <span class="product-currency">{{ productCurrency }}</span>
          <span class="product-price">{{ productPrice }}</span>
        </div>
        
        <form
          class="w-full md:w-3/4 xxl:w-1/2 mt-40"
          @submit.prevent>
          
          <Variation
            v-for="(variations, type) in product.variations"
            :key="type"
            :type="type"
            :variations="variations"
            class="mt-20"/>

          <button
            type="submit"
            class="btn btn-primary mx-auto lg:mx-0 mt-40">
            <font-awesome-icon
              :icon="['far', 'cart-plus']"
              class="mr-10"/>
            {{ $t("components.variations.buttons.add_to_cart") }}
          </button>
        </form>
      </div>
    </div>
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
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    imgUrl() {
      return `https://bulma.io/images/placeholders/1280x960.png`;
    },
    imgAlt() {
      return this.$t("components.product.img.alt");
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
    }
  }
};
</script>

