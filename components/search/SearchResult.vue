<template>
  <ais-index
    :app-id="api.id"
    :api-key="api.key"
    :query="query"
    :index-name="indexName"
    class="search__index"
  >
    <ais-stats class="search__ais-stats">
      <template slot-scope="{ totalResults }">
        <!-- Index titles -->
        <Heading tag="h3" visual="h3">
          <template v-if="indexName === 'products'">
            {{ $t('search.products') }}
          </template>
          <template v-else>
            {{ $t('search.shops') }}
          </template>
        </Heading>

        <!-- Total results -->
        <small class="search__results">
          {{ totalResults }} {{ $t('search.results_found') }}
        </small>
      </template>
    </ais-stats>

    <!-- No result found -->
    <ais-no-results class="search__ais-no-results">
      <template>
        <p class="search__ais-no-results-label">
          <template v-if="indexName === 'products'">
            {{ $t('search.no_product_found') }}
          </template>
          <template v-else>
            {{ $t('search.no_shop_found') }}
          </template>
        </p>
      </template>
    </ais-no-results>

    <!-- Results -->
    <ais-results :results-per-page="5" class="search__ais-results">
      <!-- eslint-disable -->
      <component :is="indexName" slot-scope="{ result }" :result="result" />
      <!-- eslint-enable -->
    </ais-results>

    <!-- Pagination -->
    <ais-pagination>
      <template slot-scope="{ value, active }">
        <div :class="{ 'ais-pagination__link--active': active }">
          {{ value }}
        </div>
      </template>
    </ais-pagination>
  </ais-index>
</template>

<script>
import SearchResultProduct from '@/components/search/SearchResultProduct'
import SearchResultShop from '@/components/search/SearchResultShop'

export default {
  components: {
    /* eslint-disable */
    products: SearchResultProduct,
    shops: SearchResultShop,
    /* eslint-enable */
  },
  props: {
    query: {
      type: String,
      required: true,
    },
    indexName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      api: {
        id: process.env.ALGOLIA_APP_ID,
        key: process.env.ALGOLIA_SECRET,
      },
    }
  },
}
</script>
