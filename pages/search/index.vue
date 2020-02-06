<template>
  <main>

    <!-- Header -->
    <Header
      :title="$t('search.title')"
      :description="$t('search.description')"
      icon="search"
    />

    <ContentSection class="min-h-half-screen">

      <!-- Search field -->
      <div class="search__input-group">
        <FormInput
          v-model="query"
          :placeholder="$t('search.placeholder')"
          :aria-label="$t('search.placeholder')"
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
import FormInput from '@/components/forms/FormInput'
import ContentSection from '@/components/globals/ContentSection'
import SearchResult from '@/components/search/SearchResult'

export default {
  head() {
    return {
      title: this.$t('search.title'),
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
    FormInput,
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
