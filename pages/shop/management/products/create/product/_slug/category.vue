<template>
  <div>

    <!-- Step -->
    <ProductCreatorStep>
      2/5
    </ProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <AppBackButton
        :route="{
          name: 'shop-management-products-create-product-slug',
          params: {
            slug: product.slug
          }
        }"
        class="mr-20"
      />

      <!-- Page title -->
      <h1 class="text-20 sm:text-24 md:text-30 font-extrabold leading-relaxed text-center md:text-left">
        {{ $t('products.management.create.category_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ product.name[locale] || $t('products.management.create.unnamed') }}
        </span>
      </h1>
    </header>

    <!-- Infotip -->
    <InfoTip icon="info">
      {{ $t('products.management.create.tips.category') }}
    </InfoTip>

    <!-- Form -->
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >
      <FormSection class="lg:w-full">
        <FormSectionTitle>
          {{ $t('forms.labels.category') }}
        </FormSectionTitle>
        <FormFieldset>
          <FormGroup>
            <FormLabel name="category_id">
              {{ $t('forms.labels.category') }}
            </FormLabel>
            <FormLabelDescription>
              Associez votre produit à une catégorie afin que nous puissions le répertorier dans le catalogue.
            </FormLabelDescription>
            <FormSelect
              v-model.number="form.category_id"
              :errors="errors"
              name="category_id"
            >
              <optgroup
                v-for="category in filteredCategories"
                :key="category.id"
                :label="category.name[locale]"
              >
                <option
                  v-for="subcategory in category.children"
                  :key="subcategory.id"
                  :value="subcategory.id"
                >
                  {{ subcategory.name[locale] }}
                  <template v-if="subcategory.parent">
                    &mdash; {{ subcategory.parent.name[locale] }}
                  </template>
                </option>
              </optgroup>
            </FormSelect>
            <FormValidation
              :errors="errors"
              name="category_id"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- Controls -->
      <FormSection class="lg:w-full">
        <div class="flex justify-center items-center">

          <!-- Submit -->
          <AppButtonPrimary
            :color="shopTheme"
            icon="check-circle"
            size="large"
            type="submit"
            class="mr-10"
          >
            {{ $t('buttons.next') }}
          </AppButtonPrimary>

          <!-- Cancel -->
          <AppButtonLinkTertiary
            :route="{
              name: 'shop-management-products-create-product-slug',
              params: {
                slug: product.slug
              }
            }"
            icon="arrow-left"
          >
            {{ $t('buttons.back') }}
          </AppButtonLinkTertiary>
        </div>
      </FormSection>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import InfoTip from '@/components/globals/InfoTip'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormSelect from '@/components/forms/FormSelect'
import AppBackButton from '@/components/buttons/AppBackButton'
import FormSection from '@/components/forms/FormSection'
import FormFieldset from '@/components/forms/FormFieldset'
import FormValidation from '@/components/forms/FormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import FormSectionTitle from '@/components/forms/FormSectionTitle'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'
import FormLabelDescription from '@/components/forms/FormLabelDescription'
import ProductCreatorStep from '@/components/products/creator/ProductCreatorStep'

export default {
  head() {
    return {
      title: `${this.$t('products.management.create.add_category')} | ${this.product.name[this.locale]}`,
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
  layout: 'create-product',
  middleware: [
    'authenticated',
    'hasShop'
  ],
  components: {
    InfoTip,
    FormGroup,
    FormLabel,
    FormSelect,
    AppBackButton,
    FormSection,
    FormFieldset,
    FormValidation,
    AppButtonPrimary,
    FormSectionTitle,
    AppButtonLinkTertiary,
    FormLabelDescription,
    ProductCreatorStep
  },
  mixins: [theming],
  data() {
    return {
      form: {
        category_id: null
      },
      product: {},
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      categories: 'categories'
    }),
    filteredCategories() {
      return this.categories.map((category) => {
        const parentCategory = {
          ...category,
          children: category.children.map((subcategory) => {
            if (subcategory.is_section) {
              return subcategory.children
            }
            return subcategory
          }).reduce((a, b) => a.concat(b), [])
        }
        return parentCategory
      })
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
    this.determineCurrentCategory()
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    }),
    async update() {
      try {
        await this.$axios.$patch(`/products/${this.product.slug}`, this.form)
        this.$router.push({
          name: 'shop-management-products-create-product-slug-price',
          params: {
            slug: this.product.slug
          }
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    },
    determineCurrentCategory() {
      if (this.product.category !== null) {
        this.form.category_id = this.product.category.id
      }
    }
  }
}
</script>
