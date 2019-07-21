<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'search']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">
          {{ $t("pages.search.title") }}
        </h1>
      </template>
    </AppHeader>

    <section class="section__container section__container--min-h-half-screen container">

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
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import AppHeader from '@/components/AppHeader';
import AppSearchResult from '@/components/search/AppSearchResult';

export default {
  head() {
    return {
      title: `${this.$t('pages.search.title')} | ${this.title}`
    };
  },
  components: {
    AppHeader,
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
