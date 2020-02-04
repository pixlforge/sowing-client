<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="subcategory.name[locale]"
      :description="subcategory.description[locale]"
    />

    <ContentSection>
      <div class="flex flex-wrap justify-center -mx-16">

        <!-- Products -->
        <AppProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </ContentSection>

  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/headers/AppHeader'
import AppProduct from '@/components/products/AppProduct'
import ContentSection from '@/components/ContentSection'

export default {
  head() {
    return {
      title: this.subcategory.name[this.locale]
    }
  },
  components: {
    AppHeader,
    AppProduct,
    ContentSection
  },
  data() {
    return {
      subcategory: {},
      products: []
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  async asyncData({ app, params }) {
    const subcategory = await app.$axios.$get(`/categories/${params.subcategory}`)
    const products = await app.$axios.$get(`/products?category=${params.subcategory}`)

    return {
      subcategory: subcategory.data,
      products: products.data
    }
  }
}
</script>
