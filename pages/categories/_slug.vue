<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="categoryName"
      :description="categoryDescription"
    />

    <!-- Content -->
    <AppContentSection>

      <!-- Subcategories with sections -->
      <template v-if="categoryHasSections">
        <div
          v-for="section in category.children"
          :key="section.id"
        >

          <!-- Section name -->
          <AppTitle
            semantic="h1"
            visual="main"
          >
            {{ section.name[locale] }}
          </AppTitle>

          <div class="flex flex-wrap justify-center -mx-16 mb-96 md:mb-132 lg:mb-196">

            <!-- Subcategory -->
            <AppSubCategory
              v-for="subcategory in section.children"
              :key="subcategory.slug"
              :category="category"
              :subcategory="subcategory"
            />
          </div>
        </div>
      </template>

      <!-- Subcategories without sections -->
      <template v-else>
        <div class="flex flex-wrap justify-center sm:-mx-36 mt-96">

          <!-- Subcategory -->
          <AppSubCategory
            v-for="subcategory in category.children"
            :key="subcategory.slug"
            :category="category"
            :subcategory="subcategory"
          />
        </div>
      </template>
    </AppContentSection>

  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppHeader from '@/components/headers/AppHeader'
import AppContentSection from '@/components/AppContentSection'
import AppSubCategory from '@/components/categories/AppSubCategory'

export default {
  head() {
    return {
      title: this.category.name[this.locale]
    }
  },
  components: {
    AppTitle,
    AppHeader,
    AppContentSection,
    AppSubCategory
  },
  data() {
    return {
      category: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    categoryHasSections() {
      return this.category.children[0].is_section
    },
    categoryName() {
      return this.category.name[this.locale]
    },
    categoryDescription() {
      return this.category.description[this.locale]
    }
  },
  async asyncData({ params, app }) {
    const res = await app.$axios.$get(`/categories/${params.slug}`)

    return {
      category: res.data
    }
  }
}
</script>
