<template>
  <div class="relative bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow transition-fast flex items-center p-30 my-48">

    <!-- Product featured image -->
    <div class="w-1/5">
      <img
        :src="imgUrl"
        :alt="imgAlt"
        class="block w-full rounded-lg"
      >
    </div>

    <!-- Name & description -->
    <div class="w-2/5 pl-30">
      <AppTitle
        semantic="h3"
        visual="h4"
      >
        {{ baseProductName }} &ndash; {{ variationType }} &ndash; {{ variationName }}
      </AppTitle>

      <p class="text-14 leading-relaxed mt-20">
        {{ baseProductDescription }}
      </p>
    </div>

    <!-- Price -->
    <div class="w-1/5 text-center px-20">
      <AppTitle
        semantic="h5"
        visual="h5"
        utilities="text-12 text-gray-200"
      >
        {{ labelPrice }}
      </AppTitle>

      <div class="h-42 text-18 font-extrabold mt-20 flex justify-center items-center">
        {{ product.total.currency }} {{ product.total.amount }}
      </div>
    </div>

    <!-- Quantity -->
    <div class="w-1/5 text-center px-20">
      <AppTitle
        semantic="h5"
        visual="h5"
        utilities="text-12 text-gray-200"
      >
        {{ labelQuantity }}
      </AppTitle>

      <AppFormSelect
        v-model="quantity"
        name="quantity"
        class="mt-16"
      >
        <option
          v-if="product.quantity == 0"
          value="0"
          disabled
        >
          0
        </option>
        <option
          v-for="n in parseInt(product.stock_count)"
          :key="n"
          :value="n"
          :selected="n == product.quantity"
        >
          {{ n }}
        </option>
      </AppFormSelect>
    </div>

    <!-- Remove control -->
    <button
      role="button"
      title="Remove"
      class="absolute top-0 right-0 mt-20 mr-20"
      @click="remove(product.id)"
    >
      <font-awesome-icon
        :icon="['far', 'times']"
        class="text-20 text-gray-200 hover:text-red-500 cursor-pointer"
      />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppFormSelect from '@/components/forms/AppFormSelect'

export default {
  components: {
    AppTitle,
    AppFormSelect
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    quantity: {
      get() {
        return this.product.quantity
      },
      set(quantity) {
        this.update({ productId: this.product.id, quantity })
      }
    },
    imgUrl() {
      return require('@/assets/img/placeholders/category.svg')
    },
    imgAlt() {
      return this.$t('components.products.img.alt')
    },
    labelPrice() {
      return this.$t('components.cart.labels.price')
    },
    labelQuantity() {
      return this.$t('components.cart.labels.quantity')
    },
    baseProductName() {
      return this.product.product.name[this.locale]
    },
    baseProductDescription() {
      return this.product.product.description[this.locale]
    },
    variationName() {
      return this.product.name[this.locale]
    },
    variationDescription() {
      return this.product.description[this.locale]
    },
    variationType() {
      return this.product.type.name[this.locale]
    }
  },
  methods: {
    ...mapActions({
      destroy: 'cart/destroy',
      update: 'cart/update'
    }),
    remove(productId) {
      this.$toast.success(
        `${this.baseProductName} ${this.variationType} ${
          this.variationName
        } ${this.$t('toasts.cart.product_removed')}`
      )
      this.destroy(productId)
    }
  }
}
</script>
