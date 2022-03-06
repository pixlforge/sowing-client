<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
    <nuxt-link
      :to="{
        name: 'categories-slug',
        params: {
          slug: category.slug,
        },
      }"
      :style="imgUrl"
      class="relative h-150 sm:h-315 flex justify-center items-center no-underline bg-cover bg-center bg-no-repeat"
    >
      <!-- Name -->
      <Heading tag="h2" visual="h3" utilities="text-white text-center z-10">
        {{ category.name[locale] }}
      </Heading>

      <!-- Mask -->
      <div class="absolute w-full h-full bg-black opacity-25" />
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Heading from '@/components/globals/Heading'

export default {
  components: {
    Heading,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
    }),
    imgUrl() {
      const img = require('@/assets/img/placeholders/category.svg')
      return `background-image: url(${img})`
    },
  },
}
</script>
