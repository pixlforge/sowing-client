<template>
  <main>

    <!-- Header -->
    <Header
      :title="subcategory.name[locale]"
      :description="subcategory.description[locale]"
    />

    <ContentSection>
      <div class="flex flex-wrap justify-center -mx-16">

        <!-- Products -->
        <Product
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

import ContentSection from '@/components/globals/ContentSection'
import Header from '@/components/headers/Header'
import Product from '@/components/products/Product'

export default {
  components: {
    ContentSection,
    Header,
    Product
  },
  head() {
    return {
      title: this.subcategory.name[this.locale]
    }
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
