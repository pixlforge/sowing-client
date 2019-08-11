<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="subcategory.name[locale]"
      :description="subcategory.description[locale]"
    />

    <AppContentSection>
      <div class="flex flex-wrap justify-start -mx-20">

        <!-- Products -->
        <AppProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </AppContentSection>

  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/headers/AppHeader'
import AppProduct from '@/components/products/AppProduct'
import AppContentSection from '@/components/AppContentSection'

export default {
  head() {
    return {
      title: `${this.subcategory.name[this.locale]} | ${this.title}`
    }
  },
  components: {
    AppHeader,
    AppProduct,
    AppContentSection
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
  async asyncData({ params, app }) {
    const subcategory = await app.$axios.$get(
      `/categories/${params.subcategory}`
    )
    const products = await app.$axios.$get(
      `/products?category=${params.subcategory}`
    )

    return {
      title: app.head.title,
      subcategory: subcategory.data,
      products: products.data
    }
  }
}
</script>
