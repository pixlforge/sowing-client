<template>
  <div>

    <!-- Step -->
    <AppProductCreatorStep>
      2/5
    </AppProductCreatorStep>

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
    <AppInfoTip icon="info">
      <!-- {{ $t('products.management.create.base_product_translation_advice') }} -->
      Associez votre produit à la catégorie qui lui correspond.
    </AppInfoTip>

    <!-- Form -->
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >
      <AppFormSection class="lg:w-full">
        <AppFormSectionTitle>
          {{ $t('forms.labels.category') }}
        </AppFormSectionTitle>
        <AppFormFieldset>
          <AppFormGroup>
            <AppFormLabel name="category_id">
              {{ $t('forms.labels.category') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Associez votre produit à une catégorie afin que nous puissions le répertorier dans le catalogue.
            </AppFormLabelDescription>
            <AppFormSelect
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
            </AppFormSelect>
            <AppFormValidation
              :errors="errors"
              name="category_id"
            />
          </AppFormGroup>
        </AppFormFieldset>
      </AppFormSection>

      <!-- Controls -->
      <AppFormSection class="lg:w-full">
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
      </AppFormSection>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppInfoTip from '@/components/globals/AppInfoTip'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppFormSection from '@/components/forms/AppFormSection'
import AppFormFieldset from '@/components/forms/AppFormFieldset'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormSectionTitle from '@/components/forms/AppFormSectionTitle'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'
import AppFormLabelDescription from '@/components/forms/AppFormLabelDescription'
import AppProductCreatorStep from '@/components/products/creator/AppProductCreatorStep'

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
    AppInfoTip,
    AppFormGroup,
    AppFormLabel,
    AppFormSelect,
    AppBackButton,
    AppFormSection,
    AppFormFieldset,
    AppFormValidation,
    AppButtonPrimary,
    AppFormSectionTitle,
    AppButtonLinkTertiary,
    AppFormLabelDescription,
    AppProductCreatorStep
  },
  mixins: [
    theming
  ],
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
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    }),
    update() {
      console.log('Update')
    }
  }
}
</script>
