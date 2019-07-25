<template>
  <div class="w-full sm:w-1/2 xl:w-1/3 px-20 md:px-36 my-24 md:my-48">
    <div class="rounded-lg shadow-2xl">

      <nuxt-link
        :to="localePath({
          name: 'categories-category-subcategory-slug',
          params: {
            category: category.slug,
            slug: subcategory.slug
          }
        })">
        <img
          :alt="alt"
          :src="imgSrc"
          class="block w-full rounded-t-lg">
      </nuxt-link>

      <div class="p-20">

        <!-- Title -->
        <AppTitle
          semantic="h2"
          visual="h3"
          utilities="text-center">
          {{ subcategory.name[locale] }}
        </AppTitle>

        <!-- Description -->
        <p class="text-16 text-center leading-relaxed my-30">
          {{ subcategory.description[locale] }}
        </p>

        <!-- Subcategory link -->
        <AppButtonLinkSecondary
          :to="localePath({
            name: 'categories-category-subcategory-slug',
            params: {
              category: category.slug,
              slug: subcategory.slug
            }
          })">
          {{ $t("components.category.link.see_all") }}
        </AppButtonLinkSecondary>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppButtonLinkSecondary from '@/components/buttons/AppButtonLinkSecondary'

export default {
  components: {
    AppTitle,
    AppButtonLinkSecondary
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
    alt() {
      return this.$t('components.category.img.alt')
    },
    imgSrc() {
      return require('@/assets/img/placeholders/category.svg')
    }
  }
}
</script>
