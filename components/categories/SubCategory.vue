<template>
  <nuxt-link
    :to="{
      name: 'categories-category-subcategory-slug',
      params: {
        category: category.slug,
        subcategory: subcategory.slug,
        slug: subcategory.slug
      }
    }"
    class="w-full sm:w-1/2 xl:w-1/3 group px-20 md:px-36 my-24 md:my-48"
  >

    <!-- Image -->
    <img
      :src="imgSrc"
      :alt="imgAlt"
      class="w-full h-250 sm:h-300 md:h-300 lg:h-350 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow transition-faster"
    >

    <!-- Card content -->
    <div class="relative px-20 sm:px-30 -mt-36">
      <div class="bg-white outline-none focus:shadow-outline rounded-lg shadow-lg group-hover:shadow-xl transition-shadow transition-faster overflow-hidden px-20 sm:px-24 py-36">

        <!-- Title -->
        <Heading
          tag="h2"
          visual="h4"
          utilities="text-center"
        >
          {{ subcategory.name[locale] }}
        </Heading>

      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

import Heading from '@/components/globals/Heading'

export default {
  components: {
    Heading
  },
  props: {
    category: {
      type: Object,
      required: true
    },
    subcategory: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    imgSrc() {
      return require('@/assets/img/placeholders/category.svg')
    },
    imgAlt() {
      return this.$t('categories.img.alt')
    }
  }
}
</script>
