<template>
  <main>

    <!-- Header -->
    <Header
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
        <SearchResult
          :query="query"
          index-name="products"
          class="search__results-component search__results-component--left"
        />

        <!-- Shop search results -->
        <SearchResult
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

import Header from '@/components/headers/Header'
import AppFormInput from '@/components/forms/AppFormInput'
import ContentSection from '@/components/ContentSection'
import SearchResult from '@/components/search/SearchResult'

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
    Header,
    AppFormInput,
    ContentSection,
    SearchResult
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
