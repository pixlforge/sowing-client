<template>
  <div class="">

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <ButtonBack
        v-if="product"
        :route="{
          name: 'shop-management-products-create-product-slug-types',
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
        <span :class="`text-${shopTheme}-500`">
          {{ variationName || $t('product.creator.variation.unnamed') | capitalizeFirstLetter }}
        </span>
      </Heading>
    </header>

    <!-- Infotip -->
    <InfoTip icon="info">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde numquam quia fugiat cum laboriosam iste. Ab, excepturi qui, repellat odio odit vitae aliquam dignissimos facere minus, quod obcaecati facilis. Quisquam.
      </p>
    </InfoTip>

    <!-- Content -->
    <form @submit.prevent="update">

      <!-- Name -->
      <FormGroup>
        <FormLabel name="name.fr">
          {{ $t('form.name.label') }}
        </FormLabel>
        <FormInput
          v-model="form.name.fr"
          :errors="errors"
          name="name.fr"
        />
        <FormValidation
          :errors="errors"
          name="name.fr"
        />
      </FormGroup>

      <!-- Description -->
      <FormGroup>
        <FormLabel name="description.fr">
          {{ $t('form.description.label') }}
        </FormLabel>
        <FormTextarea
          v-model="form.description.fr"
          :errors="errors"
          name="description.fr"
        />
        <FormValidation
          :errors="errors"
          name="description.fr"
        />
      </FormGroup>

    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import locales from '@/mixins/locales'
import { capitalizeFirstLetter } from '@/mixins/filters'

import ButtonBack from '@/components/buttons/ButtonBack'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormTextarea from '@/components/forms/FormTextarea'
import FormValidation from '@/components/forms/FormValidation'
import Heading from '@/components/globals/Heading'
import InfoTip from '@/components/globals/InfoTip'

export default {
  components: {
    ButtonBack,
    FormGroup,
    FormInput,
    FormLabel,
    FormTextarea,
    FormValidation,
    Heading,
    InfoTip
  },
  mixins: [
    theming,
    locales,
    capitalizeFirstLetter
  ],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'create-product',
  head() {
    return {
      title: `${this.$t('product.creator.variation.title')} ${this.form.name[this.locale] || this.$t('product.creator.variation.unnamed')} | ${this.$t('product.management.create.title')} | ${this.product.name[this.locale]} | ${this.shop.name}`,
      meta: [
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
      form: {},
      errors: {}
    }
  },
  computed: {
    variationName() {
      return this.form.name[this.locale]
    }
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)
    const variation = await app.$axios.$get(`/products/${params.slug}/product-variations/${params.id}`)

    return {
      shop: shop.data,
      product: product.data,
      form: variation.data
    }
  },
  mounted() {
    this.setShop(this.shop)
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    })
  }
}
</script>
