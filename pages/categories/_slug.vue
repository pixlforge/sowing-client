<template>
  <main>
    <!-- Header -->
    <Header :title="categoryName" :description="categoryDescription" />

    <!-- Content -->
    <ContentSection>
      <!-- Subcategories with sections -->
      <template v-if="categoryHasSections">
        <div v-for="section in category.children" :key="section.id">
          <!-- Section name -->
          <Heading tag="h1" visual="main">
            {{ section.name[locale] }}
          </Heading>

          <div
            class="flex flex-wrap justify-center -mx-16 mb-96 md:mb-132 lg:mb-196"
          >
            <!-- Subcategory -->
            <SubCategory
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
          <SubCategory
            v-for="subcategory in category.children"
            :key="subcategory.slug"
            :category="category"
            :subcategory="subcategory"
          />
        </div>
      </template>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import ContentSection from '@/components/globals/ContentSection'
import Header from '@/components/headers/Header'
import Heading from '@/components/globals/Heading'
import SubCategory from '@/components/categories/SubCategory'

export default {
  components: {
    ContentSection,
    Header,
    Heading,
    SubCategory,
  },
  async asyncData({ params, app }) {
    const res = await app.$axios.$get(`/categories/${params.slug}`)

    return {
      category: res.data,
    }
  },
  data() {
    return {
      category: {},
    }
  },
  head() {
    return {
      title: this.category.name[this.locale],
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
    }),
    categoryHasSections() {
      return this.category.children[0].is_section
    },
    categoryName() {
      return this.category.name[this.locale]
    },
    categoryDescription() {
      return this.category.description[this.locale]
    },
  },
}
</script>
