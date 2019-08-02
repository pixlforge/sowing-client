<template>
  <nuxt-link
    :to="localePath({ name: 'shop-slug-details', params: { slug: result.slug } })"
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
        <AppTitle
          semantic="h5"
          visual="h4"
        >
          {{ result.name }}
        </AppTitle>

        <!-- Description -->
        <p
          class="search__result-description"
          v-html="result.description_short[locale]"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppTitle
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
