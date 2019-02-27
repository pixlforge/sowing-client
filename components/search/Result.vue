<template>
  <ais-index
    :app-id="api.id"
    :api-key="api.key"
    :query="query"
    :index-name="indexName"
    class="w-1/2 pr-10">
    <ais-stats class="text-center">
      <template slot-scope="{ totalResults }">
        <h3 class="text-24 font-bold mb-5">
          <template v-if="indexName === 'products'">
            {{ $t("pages.search.products") }}
          </template>
          <template v-else>
            {{ $t("pages.search.shops") }}
          </template>
        </h3>
        <small class="text-14">
          {{ totalResults }} {{ $t("pages.search.results_found") }}
        </small>
      </template>
    </ais-stats>
    <ais-no-results class="-mt-5">
      <template>
        <p class="text-24 font-bold">
          <template v-if="indexName === 'products'">
            {{ $t("pages.search.no_product_found") }}
          </template>
          <template v-else>
            {{ $t("pages.search.no_shop_found") }}
          </template>
        </p>
      </template>
    </ais-no-results>
    <ais-results
      :results-per-page="5"
      class="mt-40">
      <component
        slot-scope="{ result }"
        :is="indexName"
        :result="result"/>
    </ais-results>
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
import ResultShop from "@/components/search/ResultShop";
import ResultProduct from "@/components/search/ResultProduct";

export default {
  components: {
    'shops': ResultShop,
    'products': ResultProduct
  },
  props: {
    query: {
      type: String,
      required: true
    },
    indexName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      api: {
        id: process.env.ALGOLIA_APP_ID,
        key: process.env.ALGOLIA_SECRET
      },
    };
  },
}
</script>
