<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'search']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.search.title") }}</h1>
      </template>
    </Header>
    
    <section class="container min-h-half-screen section mt-150">

      <!-- Search field -->
      <div class="max-w-800 mx-auto">
        <input
          v-model="query"
          :placeholder="$t('pages.search.placeholder')"
          class="input-base text-30 p-30">
      </div>

      <div class="flex mt-60">

        <!-- Product search results -->
        <Result
          :query="query"
          index-name="products"
          class="w-1/2 pr-10"/>
        
        <!-- Shop search results -->
        <Result
          :query="query"
          index-name="shops"
          class="w-1/2 pl-10"/>

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
