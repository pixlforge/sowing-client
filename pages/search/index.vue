<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'search']"/>
      </template>
      <template slot="title">
        <AppTitle
          semantic="h1"
          visual="header">
          {{ $t("pages.search.title") }}
        </AppTitle>
      </template>
    </AppHeader>

    <AppContentSection class="min-h-half-screen">

      <!-- Search field -->
      <div class="search__input-group">
        <input
          v-model="query"
          :placeholder="$t('pages.search.placeholder')"
          class="form__input form__input--large">
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
import { mapGetters } from 'vuex';

import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppContentSection from '@/components/AppContentSection';
import AppSearchResult from '@/components/search/AppSearchResult';

export default {
  head() {
    return {
      title: `${this.$t('pages.search.title')} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
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
    };
  }
};

</script>
