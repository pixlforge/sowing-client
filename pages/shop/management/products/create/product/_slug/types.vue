<template>
  <div class="container">

    <!-- Progress -->
    <ProductCreatorProgress :current-step="4">
      {{ $t('product.creator.type.types_variations') }}
    </ProductCreatorProgress>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <ButtonBack
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
        {{ $t('product.management.create.types_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ product.name[locale] || $t('product.management.create.unnamed') }}
        </span>
      </Heading>
    </header>

    <!-- Infotip -->
    <InfoTip icon="info">
      <p>
        {{ $t('product.management.create.tips.types') }}
      </p>
      <ol class="list-decimal ml-18 mt-20">
        <li>
          {{ $t('product.creator.infotip.add_type') }}
        </li>
        <li v-if="productHasAtLeastOneType">
          {{ $t('product.creator.infotip.add_variation') }}
        </li>
        <li v-if="productHasAtLeastOneVariation">
          {{ $t('product.creator.infotip.add_many') }}
        </li>
      </ol>
    </InfoTip>

    <!-- Types -->
    <ProductVariationType
      v-for="type in product.types"
      :key="type.id"
      :type="type"
      :product="product"
      @product-variation:added="getProduct"
      class="mb-10"
    />

    <!-- Add a new variation type -->
    <ButtonPulse
      @click.native="addVariationType"
      :should-pulse="productHasNoType"
      icon="plus"
      class="text-14"
    >
      <template v-if="productHasNoType">
        {{ $t('product.creator.type.add') }}
      </template>
      <template v-else>
        {{ $t('product.creator.type.add_another') }}
      </template>
    </ButtonPulse>

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
          {{ $t('button.back') }}
        </ButtonLinkTertiary>

        <!-- Next -->
        <ButtonPrimary
          :disabled="productHasNoType"
          :color="shopTheme"
          icon="arrow-right"
          size="large"
          type="submit"
          class="ml-10"
        >
          {{ $t('button.pictures') }}
        </ButtonPrimary>
      </div>
    </FormSection>

    <!-- Confirmation modal -->
    <ConfirmationModal
      :title="$t('modals.product_variation_type.delete.title')"
      :body="$t('modals.product_variation_type.delete.title')"
      :button-label="$t('button.delete')"
      @confirm="destroy"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
    />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonPulse from '@/components/buttons/ButtonPulse'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import FormSection from '@/components/forms/FormSection'
import Heading from '@/components/globals/Heading'
import InfoTip from '@/components/globals/InfoTip'
import ProductCreatorProgress from '@/components/products/creator/ProductCreatorProgress'
import ProductVariationType from '@/components/products/creator/ProductVariationType'

export default {
  components: {
    ButtonBack,
    ButtonLinkTertiary,
    ButtonPrimary,
    ButtonPulse,
    ConfirmationModal,
    FormSection,
    Heading,
    InfoTip,
    ProductCreatorProgress,
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
      title: `${this.$t('product.management.create.types')} | ${this.$t('product.management.create.title')} | ${this.product.name[this.locale]} | ${this.shop.name}`,
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
      locale: 'locale',
      getResourceId: 'confirmation/getResourceId'
    }),
    productHasAtLeastOneType() {
      return this.product.types.length
    },
    productHasNoType() {
      return !this.productHasAtLeastOneType
    },
    productHasAtLeastOneVariation() {
      return this.product.variations.length
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
      setShop: 'shop/setShop',
      closeModal: 'confirmation/closeModal'
    }),
    async addVariationType() {
      try {
        const type = await this.$axios.$post(`/products/${this.product.slug}/product-variation-types`)
        this.product.types.push(type.data)
        this.$toast.success('Congratulations!!!')
      } catch (e) {
        this.$toasted.error(this.$t('toasts.general_error'))
      }
    },
    async destroy() {
      try {
        await this.$axios.$delete(`/products/${this.product.slug}/product-variation-types/${this.getResourceId}`)
        await this.getProduct()
        this.$toasted.success(this.$t('toasts.addresses.deleted'))
      } catch (e) {
        this.$toasted.error(this.$t('toasts.general_error'))
      }
      this.closeModal()
    },
    async getProduct() {
      const res = await this.$axios.$get(`/products/${this.product.slug}`)
      this.product = res.data
    }
  }
}
</script>
