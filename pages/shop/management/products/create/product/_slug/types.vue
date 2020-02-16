<template>
  <div>

    <!-- Step -->
    <ProductCreatorStep>
      4/5
    </ProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <BackButton
        :route="{
          name: 'shop-management-products-create-product-slug-price',
          params: {
            slug: product.slug
          }
        }"
        class="mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h4"
        utilities="text-center"
      >
        {{ $t('products.management.create.types_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ product.name[locale] || $t('products.management.create.unnamed') }}
        </span>
      </Heading>
    </header>

    <!-- Infotip -->
    <InfoTip icon="info">
      {{ $t('products.management.create.tips.types') }}
    </InfoTip>

    <!-- Types -->
    <ProductVariationType
      v-for="type in product.types"
      :key="type.id"
      :type="type"
      :product="product"
      class="my-48"
    />

    <!-- Add a new variation type -->
    <ButtonPrimary
      @click.native="addVariationType"
      :class="`bg-${shopTheme}-300 hover:bg-${shopTheme}-500`"
      size="large"
      type="button"
      class=""
    >
      <font-awesome-icon
        :icon="['fas', 'plus']"
        class="mr-10"
      />
      <template v-if="productHasNoType">
        {{ $t('product_variation_type.add_type') }}
      </template>
      <template v-else>
        {{ $t('product_variation_type.add_another_type') }}
      </template>
    </ButtonPrimary>

    <!-- Controls -->
    <FormSection class="lg:w-full">
      <div class="flex justify-center items-center">

        <!-- Cancel -->
        <ButtonLinkTertiary
          :route="{
            name: 'shop-management-products-create-product-slug-price',
            params: {
              slug: product.slug
            }
          }"
          icon="arrow-left"
        >
          {{ $t('buttons.back') }}
        </ButtonLinkTertiary>

        <!-- Submit -->
        <ButtonPrimary
          :disabled="productHasNoType"
          :color="shopTheme"
          icon="check-circle"
          size="large"
          type="submit"
          class="ml-10"
        >
          {{ $t('buttons.next') }}
        </ButtonPrimary>
      </div>
    </FormSection>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Heading from '@/components/globals/Heading'
import InfoTip from '@/components/globals/InfoTip'
import BackButton from '@/components/buttons/BackButton'
import FormSection from '@/components/forms/FormSection'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import ProductCreatorStep from '@/components/products/creator/ProductCreatorStep'
import ProductVariationType from '@/components/products/creator/ProductVariationType'

export default {
  components: {
    Heading,
    InfoTip,
    BackButton,
    FormSection,
    ButtonPrimary,
    ButtonLinkTertiary,
    ProductCreatorStep,
    ProductVariationType
  },
  mixins: [theming],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'create-product',
  head() {
    return {
      title: `${this.$t('products.management.create.types')} | ${this.$t('products.management.create.title')} | ${this.product.name[this.locale]} | ${this.shop.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  data() {
    return {
      product: {},
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    productHasNoType() {
      return !this.product.types.length
    }
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)

    return {
      shop: shop.data,
      product: product.data
    }
  },
  mounted() {
    this.setShop(this.shop)
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    }),
    async addVariationType() {
      try {
        const type = await this.$axios.$post(`/products/${this.product.slug}/product-variation-types`)
        this.product.types.push(type.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
