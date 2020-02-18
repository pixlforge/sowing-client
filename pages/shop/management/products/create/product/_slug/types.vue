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
    <InfoTip
      icon="info"
      class="mb-48"
    >
      {{ $t('products.management.create.tips.types') }}
    </InfoTip>

    <!-- Types -->
    <ProductVariationType
      v-for="type in product.types"
      :key="type.id"
      :type="type"
      :product="product"
      class="mb-10"
    />

    <!-- Add a new variation type -->
    <button
      @click="addVariationType"
      type="button"
      class="w-full hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg text-14 text-gray-300 hover:text-gray-400 transition-all duration-200 ease-out select-none py-12"
    >
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="mr-10"
      />
      <template v-if="productHasNoType">
        {{ $t('product_variation_type.add_type') }}
      </template>
      <template v-else>
        {{ $t('product_variation_type.add_another_type') }}
      </template>
    </button>

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

    <!-- Confirmation modal -->
    <ConfirmationModal
      :title="$t('modals.product_variation_type.delete.title')"
      :body="$t('modals.product_variation_type.delete.title')"
      :button-label="$t('buttons.delete')"
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

import Heading from '@/components/globals/Heading'
import InfoTip from '@/components/globals/InfoTip'
import BackButton from '@/components/buttons/BackButton'
import FormSection from '@/components/forms/FormSection'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
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
    ConfirmationModal,
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
      locale: 'locale',
      getResourceId: 'confirmation/getResourceId'
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
      setShop: 'shop/setShop',
      closeModal: 'confirmation/closeModal'
    }),
    async addVariationType() {
      try {
        const type = await this.$axios.$post(`/products/${this.product.slug}/product-variation-types`)
        this.product.types.push(type.data)
      } catch (e) {
        console.log(e)
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
