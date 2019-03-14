<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'search']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ $t("pages.search.title") }}</h1>
      </template>
    </Header>
    
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
        <Result
          :query="query"
          index-name="products"
          class="search__results-component search__results-component--left"/>
        
        <!-- Shop search results -->
        <Result
          :query="query"
          index-name="shops"
          class="search__results-component search__results-component--right"/>

      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import Result from "@/components/search/Result";
import { mapGetters } from 'vuex';

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.search.title")}`
    };
  },
  components: {
    Header,
    Result
  },
  data() {
    return {
      query: ""
    }
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};

</script>
