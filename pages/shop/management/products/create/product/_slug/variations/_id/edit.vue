<template>
  <div class="container">

    <!-- Progress -->
    <ProductCreatorProgress :current-step="5">
      {{ $t('product.creator.variation.variation') }}
    </ProductCreatorProgress>

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
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >

      <!-- French -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.french') }}
        </FormSectionTitle>
        <FormFieldset>

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
              :rows="3"
              :errors="errors"
              name="description.fr"
            />
            <FormValidation
              :errors="errors"
              name="description.fr"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- English -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.english') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.en">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormInput
              v-model="form.name.en"
              :errors="errors"
              name="name.en"
            />
            <FormValidation
              :errors="errors"
              name="name.en"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.en">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormTextarea
              v-model="form.description.en"
              :rows="3"
              :errors="errors"
              name="description.en"
            />
            <FormValidation
              :errors="errors"
              name="description.en"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- German -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.german') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.de">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormInput
              v-model="form.name.de"
              :errors="errors"
              name="name.de"
            />
            <FormValidation
              :errors="errors"
              name="name.de"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.de">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormTextarea
              v-model="form.description.de"
              :rows="3"
              :errors="errors"
              name="description.de"
            />
            <FormValidation
              :errors="errors"
              name="description.de"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- Italian -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.italian') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.it">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormInput
              v-model="form.name.it"
              :errors="errors"
              name="name.it"
            />
            <FormValidation
              :errors="errors"
              name="name.it"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.it">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormTextarea
              v-model="form.description.it"
              :rows="3"
              :errors="errors"
              name="description.it"
            />
            <FormValidation
              :errors="errors"
              name="description.it"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

    </form>

    <!-- Controls -->
    <FormSection class="lg:w-full">
      <div class="flex justify-center items-center">

        <!-- Back -->
        <ButtonLinkTertiary
          :route="{
            name: 'shop-management-products-create-product-slug-types',
            params: {
              slug: product.slug
            }
          }"
          icon="arrow-left"
        >
          {{ $t('button.back') }}
        </ButtonLinkTertiary>

        <!-- Ok -->
        <ButtonLinkPrimary
          :route="{
            name: 'shop-management-products-create-product-slug-types',
            params: {
              slug: product.slug
            }
          }"
          :color="shopTheme"
          icon="check-circle"
          size="large"
          type="submit"
          class="ml-10"
        >
          {{ $t('button.ok') }}
        </ButtonLinkPrimary>
      </div>
    </FormSection>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import locales from '@/mixins/locales'
import { capitalizeFirstLetter } from '@/mixins/filters'

import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import FormFieldset from '@/components/forms/FormFieldset'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormSection from '@/components/forms/FormSection'
import FormSectionTitle from '@/components/forms/FormSectionTitle'
import FormTextarea from '@/components/forms/FormTextarea'
import FormValidation from '@/components/forms/FormValidation'
import Heading from '@/components/globals/Heading'
import InfoTip from '@/components/globals/InfoTip'
import ProductCreatorProgress from '@/components/products/creator/ProductCreatorProgress'

export default {
  components: {
    ButtonBack,
    ButtonLinkPrimary,
    ButtonLinkTertiary,
    FormFieldset,
    FormGroup,
    FormInput,
    FormLabel,
    FormTextarea,
    FormSection,
    FormSectionTitle,
    FormValidation,
    Heading,
    InfoTip,
    ProductCreatorProgress
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
