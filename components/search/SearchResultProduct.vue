<template>
  <nuxt-link
    :to="{
      name: 'products-slug',
      params: {
        slug: result.slug,
      },
    }"
    class="search__result-link search__result-link--product group"
  >
    <div
      class="search__result-content search__result-content--product group-hover:bg-green-400 group-hover:text-white"
    >
      <font-awesome-icon
        :icon="['fas', 'box-alt']"
        class="search__result-icon search__result-icon--product"
      />
      <div>
        <!-- Name -->
        <Heading tag="h5" visual="h4">
          {{ result.name[locale] }}
        </Heading>

        <!-- Description -->
        <p
          class="search__result-description search__result-description--product"
        >
          {{ result.description[locale] }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

import Heading from '@/components/globals/Heading'

export default {
  components: {
    Heading,
  },
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
    }),
  },
}
</script>
