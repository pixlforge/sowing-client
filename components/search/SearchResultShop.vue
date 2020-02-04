<template>
  <nuxt-link
    :to="{
      name: 'shop-slug-details',
      params: {
        slug: result.slug
      }
    }"
    class="search__result-link"
  >
    <div
      :class="`bg-${result.theme} hover:bg-${result.theme}-dark`"
      class="search__result-content"
    >
      <font-awesome-icon
        :icon="['fas', 'store']"
        class="search__result-icon"
      />
      <div>

        <!-- Name -->
        <Heading
          tag="h5"
          visual="h4"
        >
          {{ result.name }}
        </Heading>

        <!-- Description -->
        <!-- eslint-disable -->
        <p
          class="search__result-description"
          v-html="result.description_short[locale]"
        />
        <!-- eslint-enable -->
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
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  }
}
</script>
