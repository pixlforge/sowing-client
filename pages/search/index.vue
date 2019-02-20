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
    
    <section class="container min-h-screen section mt-150">

      <!-- Search field -->
      <div class="max-w-800 mx-auto">
        <input
          v-model="query"
          :placeholder="$t('pages.search.placeholder')"
          class="input-base text-30 p-30">
      </div>

      <div class="flex mt-60">

        <!-- Products -->
        <ais-index
          :app-id="api.id"
          :api-key="api.key"
          :query="query"
          index-name="products"
          class="w-1/2 pr-10">
          <ais-results :results-per-page="5">
            <template slot-scope="{ result }">
              <ResultProduct :result="result"/>
            </template>
          </ais-results>
          <ais-pagination>
            <template slot-scope="{ value, active }">
              <div :class="{ 'ais-pagination__link--active': active }">
                {{ value }}
              </div>
            </template>
          </ais-pagination>
        </ais-index>

        <!-- Shops -->
        <ais-index
          :app-id="api.id"
          :api-key="api.key"
          :query="query"
          index-name="shops"
          class="w-1/2 pl-10">
          <ais-results :results-per-page="5">
            <template slot-scope="{ result }">
              <ResultShop :result="result"/>
            </template>
          </ais-results>
          <ais-pagination>
            <template slot-scope="{ value, active }">
              <div :class="{ 'ais-pagination__link--active': active }">
                {{ value }}
              </div>
            </template>
          </ais-pagination>
        </ais-index>

      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import ResultShop from "@/components/search/ResultShop";
import ResultProduct from "@/components/search/ResultProduct";
import { mapGetters } from 'vuex';

export default {
  components: {
    Header,
    ResultShop,
    ResultProduct
  },
  data() {
    return {
      api: {
        id: process.env.ALGOLIA_APP_ID,
        key: process.env.ALGOLIA_SECRET
      },
      query: ""
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};

</script>
