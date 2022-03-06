<template>
  <div class="container-narrow">
    <!-- Progress -->
    <ProductCreatorProgress :current-step="2">
      {{ $t('product.creator.category.category') }}
    </ProductCreatorProgress>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">
      <!-- Back -->
      <ButtonBack
        :route="{
          name: 'shop-management-products-create-product-slug',
          params: {
            slug: product.slug,
          },
        }"
        class="mr-20"
      />

      <!-- Page title -->
      <Heading tag="h1" visual="h4" utilities="text-center">
        {{ $t('product.management.create.category_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ product.name[locale] || $t('product.management.create.unnamed') }}
        </span>
      </Heading>
    </header>

    <!-- Infotip -->
    <InfoTip icon="info">
      {{ $t('product.management.create.tips.category') }}
    </InfoTip>

    <!-- Form -->
    <form class="flex flex-wrap -mx-10" @submit.prevent="update">
      <FormSection class="lg:w-full">
        <FormSectionTitle>
          {{ $t('form.category.label') }}
        </FormSectionTitle>
        <FormFieldset>
          <FormGroup>
            <FormLabel name="category_id">
              {{ $t('form.category.label') }}
            </FormLabel>
            <FormLabelDescription>
              Associez votre produit à une catégorie afin que nous puissions le
              répertorier dans le catalogue.
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
            <FormValidation :errors="errors" name="category_id" />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- Controls -->
      <FormSection class="lg:w-full">
        <div class="flex justify-center items-center">
          <!-- Cancel -->
          <ButtonLinkTertiary
            :route="{
              name: 'shop-management-products-create-product-slug',
              params: {
                slug: product.slug,
              },
            }"
            icon="arrow-left"
          >
            {{ $t('button.back') }}
          </ButtonLinkTertiary>

          <!-- Next -->
          <ButtonPrimary
            :color="shopTheme"
            icon="arrow-right"
            size="large"
            type="submit"
            class="ml-10"
          >
            {{ $t('button.price') }}
          </ButtonPrimary>
        </div>
      </FormSection>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import Heading from '@/components/globals/Heading'
import FormFieldset from '@/components/forms/FormFieldset'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormLabelDescription from '@/components/forms/FormLabelDescription'
import FormSection from '@/components/forms/FormSection'
import FormSectionTitle from '@/components/forms/FormSectionTitle'
import FormSelect from '@/components/forms/FormSelect'
import FormValidation from '@/components/forms/FormValidation'
import InfoTip from '@/components/globals/InfoTip'
import ProductCreatorProgress from '@/components/products/creator/ProductCreatorProgress'

export default {
  components: {
    ButtonBack,
    ButtonLinkTertiary,
    ButtonPrimary,
    Heading,
    FormFieldset,
    FormGroup,
    FormLabel,
    FormLabelDescription,
    FormSection,
    FormSectionTitle,
    FormSelect,
    FormValidation,
    InfoTip,
    ProductCreatorProgress,
  },
  mixins: [theming],
  layout: 'create-product',
  middleware: ['authenticated', 'hasShop'],
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)

    return {
      shop: shop.data,
      product: product.data,
    }
  },
  data() {
    return {
      form: {
        category_id: null,
      },
      product: {},
      errors: {},
    }
  },
  head() {
    return {
      title: `${this.$t('product.management.create.category')} | ${
        this.product.name[this.locale]
      } | ${this.$t('product.management.create.title')} | ${this.shop.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      categories: 'categories',
    }),
    filteredCategories() {
      return this.categories.map((category) => {
        const parentCategory = {
          ...category,
          children: category.children
            .map((subcategory) => {
              if (subcategory.is_section) {
                return subcategory.children
              }
              return subcategory
            })
            .reduce((a, b) => a.concat(b), []),
        }
        return parentCategory
      })
    },
  },
  mounted() {
    this.setShop(this.shop)
    this.determineCurrentCategory()
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
    }),
    async update() {
      try {
        await this.$axios.$patch(`/products/${this.product.slug}`, this.form)
        this.$router.push({
          name: 'shop-management-products-create-product-slug-price',
          params: {
            slug: this.product.slug,
          },
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    },
    determineCurrentCategory() {
      if (this.product.category !== null) {
        this.form.category_id = this.product.category.id
      }
    },
  },
}
</script>
