<template>
  <div class="w-full lg:w-1/2 first:w-full h-500 p-24 first:pt-0 first:mt-48">
    <div
      :style="imgUrl"
      class="relative h-full bg-cover bg-center bg-no-repeat flex items-end shadow-2xl">

      <div class="flex flex-col items-start px-48 pb-48 z-10">

        <!-- Title -->
        <AppTitle
          semantic="h2"
          visual="h1"
          utilities="text-white">
          {{ category.name[locale] }}
        </AppTitle>

        <div class="text-white leading-none">
          <span class="text-16">
            {{ $t("components.category.in") }}
          </span>
          <span class="text-20 font-extrabold">
            {{ category.parent.name[locale] }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-16 md:text-18 text-white mt-18 mb-36">
          {{ categoryDescription }}
        </p>

        <!-- Link -->
        <AppButtonLinkPrimary
          :to="localePath({
            name: 'categories-category-subcategory-slug',
            params: {
              subcategory: category.parent.slug,
              slug: category.slug
            }
          })"
          class="shadow-xl">
          {{ $t("components.category.link.see_all") }}
        </AppButtonLinkPrimary>
      </div>

      <!-- Mask -->
      <div class="absolute w-full h-full bg-black opacity-25"/>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    AppTitle,
    AppButtonLinkPrimary
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    categoryDescription() {
      if (!this.category.description[this.locale]) {
        return
      }

      return this.category.description[this.locale]
    },
    imgUrl() {
      const img = require('@/assets/img/placeholders/product.svg')
      return `background-image: url(${img})`
    }
  }
}
</script>
