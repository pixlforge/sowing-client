<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.search.title')"
      :description="$t('pages.search.description')"
      icon="search"
    />

    <ContentSection class="min-h-half-screen">

      <!-- Search field -->
      <div class="search__input-group">
        <AppFormInput
          v-model="query"
          :placeholder="$t('pages.search.placeholder')"
          :aria-label="$t('pages.search.placeholder')"
          class="text-30 font-normal px-24 py-20"
        />
      </div>

      <div class="search__results-wrapper">

        <!-- Product search results -->
        <AppSearchResult
          :query="query"
          index-name="products"
          class="search__results-component search__results-component--left"
        />

        <!-- Shop search results -->
        <AppSearchResult
          :query="query"
          index-name="shops"
          class="search__results-component search__results-component--right"
        />

      </div>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/headers/AppHeader'
import AppFormInput from '@/components/forms/AppFormInput'
import ContentSection from '@/components/ContentSection'
import AppSearchResult from '@/components/search/AppSearchResult'

export default {
  head() {
    return {
      title: this.$t('pages.search.title'),
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
    ContentSection,
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
  }
}
</script>
