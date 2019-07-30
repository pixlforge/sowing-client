<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.search.title')"
      :description="$t('pages.search.description')"
      icon="search"/>

    <AppContentSection class="min-h-half-screen">

      <!-- Search field -->
      <div class="search__input-group">
        <AppFormInput
          v-model="query"
          :placeholder="$t('pages.search.placeholder')"
          :aria-label="$t('pages.search.placeholder')"
          class="text-30 font-normal px-24 py-20"/>
      </div>

      <div class="search__results-wrapper">

        <!-- Product search results -->
        <AppSearchResult
          :query="query"
          index-name="products"
          class="search__results-component search__results-component--left"/>

        <!-- Shop search results -->
        <AppSearchResult
          :query="query"
          index-name="shops"
          class="search__results-component search__results-component--right"/>

      </div>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/headers/AppHeader'
import AppFormInput from '@/components/forms/AppFormInput'
import AppContentSection from '@/components/AppContentSection'
import AppSearchResult from '@/components/search/AppSearchResult'

export default {
  head() {
    return {
      title: `${this.$t('pages.search.title')} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  components: {
    AppHeader,
    AppFormInput,
    AppContentSection,
    AppSearchResult
  },
  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  }
}

</script>
