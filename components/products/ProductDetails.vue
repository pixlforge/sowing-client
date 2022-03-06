<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <!-- Product featured image -->
      <div class="w-full lg:w-1/2 lg:pr-36">
        <img
          :src="imgUrl"
          :alt="imgAlt"
          class="block w-full rounded-lg shadow-2xl"
        />
      </div>

      <!-- Product content -->
      <div
        class="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-30"
      >
        <!-- Base product name -->
        <Heading tag="h1" visual="main">
          {{ productName }}
        </Heading>

        <!-- Base product description -->
        <p class="text-18 leading-relaxed my-48">
          {{ productDescription }}
        </p>

        <div class="w-full flex justify-between items-center">
          <!-- Base product price and currency -->
          <div class="flex items-start">
            <span
              :class="`text-${shopTheme}-500`"
              class="text-14 font-extrabold mr-10 mt-5"
            >
              {{ productCurrency }}
            </span>
            <span class="text-24 font-extrabold">
              {{ productPrice }}
            </span>
          </div>

          <!-- Total products in stock -->
          <div v-if="product.in_stock" class="flex items-baseline text-14">
            <font-awesome-icon
              :icon="['far', 'boxes']"
              :class="`text-${shopTheme}-500`"
              class="mr-10"
            />
            <span class="font-bold mr-5">
              {{ product.stock_count }}
            </span>
            <span>
              {{ productsRemaining }}
            </span>
          </div>

          <!-- Product is out of stock -->
          <div v-else class="flex items-start text-16 text-red-500 mt-48">
            <font-awesome-icon :icon="['far', 'boxes']" class="mr-10" />
            <span class="font-bold">
              {{ productOutOfStock }}
            </span>
          </div>
        </div>

        <form class="w-full" @submit.prevent="add">
          <FormDivider />

          <!-- Variations -->
          <ProductVariation
            v-for="(variations, type) in product.variations"
            :key="type"
            v-model="form.variation"
            :type="type"
            :variations="variations"
            class="mb-24"
          />

          <!-- Quantity -->
          <FormDivider />

          <FormLabel name="quantity">
            {{ quantityLabel }}
          </FormLabel>
          <FormSelect
            v-model.number="form.quantity"
            :disabled="!form.quantity"
            name="quantity"
          >
            <option v-for="n in form.variation.stock_count" :key="n" :value="n">
              {{ n }}
            </option>
          </FormSelect>

          <!-- Submit -->
          <ButtonPrimary
            :disabled="!form.variation.id"
            :color="shopTheme"
            type="submit"
            icon="cart-plus"
            size="large"
            class="shadow-2xl mt-36"
          >
            {{ $t('button.add_to_cart') }}
          </ButtonPrimary>
        </form>
      </div>
    </div>

    <!-- Additional product images -->
    <div class="w-full flex flex-wrap items-center mt-72 lg:mt-132">
      <div
        v-for="n in 5"
        :key="n"
        class="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-10 sm:p-20"
      >
        <img
          :src="imgUrl"
          :alt="imgAlt"
          class="block rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormDivider from '@/components/forms/FormDivider'
import FormLabel from '@/components/forms/FormLabel'
import FormSelect from '@/components/forms/FormSelect'
import Heading from '@/components/globals/Heading'
import ProductVariation from '@/components/products/ProductVariation'

export default {
  components: {
    ButtonPrimary,
    FormDivider,
    FormLabel,
    FormSelect,
    Heading,
    ProductVariation,
  },
  mixins: [theming],
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        variation: '',
        quantity: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
    }),
    imgUrl() {
      return require('@/assets/img/placeholders/category.svg')
    },
    imgAlt() {
      return this.$t('product.img.alt')
    },
    productName() {
      return this.product.name[this.locale]
    },
    productDescription() {
      return this.product.description[this.locale]
    },
    productCurrency() {
      return this.product.price.detailed.currency
    },
    productPrice() {
      return this.product.price.detailed.amount
    },
    quantityLabel() {
      return this.$t('product.variations.labels.quantity')
    },
    productsRemaining() {
      return this.$t('product.details.remaining')
    },
    productOutOfStock() {
      return this.$t('product.details.out_of_stock')
    },
  },
  watch: {
    'form.variation'() {
      this.form.quantity = 1
    },
  },
  methods: {
    ...mapActions({
      store: 'cart/store',
    }),
    async add() {
      await this.store([
        {
          id: this.form.variation.id,
          quantity: this.form.quantity,
        },
      ])

      this.$toast.success(
        `
          ${this.form.quantity}x
          ${this.product.name[this.locale]}
          ${this.form.variation.type.name[this.locale]}
          ${this.form.variation.name[this.locale]}
          ${
            this.form.quantity > 1
              ? this.$t('toasts.cart.item_added_plural')
              : this.$t('toasts.cart.item_added_singular')
          }
        `
      )

      this.form = {
        variation: '',
        quantity: 1,
      }
    },
  },
}
</script>
