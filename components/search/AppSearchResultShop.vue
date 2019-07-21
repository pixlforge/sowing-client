<template>
  <nuxt-link
    :to="localePath({ name: 'shop-slug-details', params: { slug: result.slug } })"
    class="search__result-link">
    <div
      :class="`bg-${result.theme} hover:bg-${result.theme}-dark`"
      class="search__result-content">
      <font-awesome-icon
        :icon="['fas', 'store']"
        class="search__result-icon"/>
      <div>
        <h5 class="search__result-name">
          {{ result.name }}
        </h5>
        <p
          class="search__result-description"
          v-html="result.description_short[locale]"/>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
