<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: result.slug } })"
    class="search__result-link search__result-link--product group">
    <div class="search__result-content search__result-content--product group-hover:bg-green-400 group-hover:text-white">
      <font-awesome-icon
        :icon="['fas', 'box-alt']"
        class="search__result-icon search__result-icon--product"/>
      <div>
        <h5 class="search__result-name search__result-name--product">
          {{ result.name[locale] }}
        </h5>
        <p class="search__result-description search__result-description--product">
          {{ result.description[locale] }}
        </p>
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
