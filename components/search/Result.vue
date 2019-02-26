<template>
  <ais-index
    :app-id="api.id"
    :api-key="api.key"
    :query="query"
    :index-name="indexName"
    class="w-1/2 pr-10">
    <ais-results :results-per-page="5">
      <component
        slot-scope="{ result }"
        :is="indexName"
        :result="result"/>
    </ais-results>
    <ais-no-results>
      <template slot-scope="props">
        Aucun résultat pour la recherche:<br>
        <strong>{{ props.query }}</strong>
      </template>
    </ais-no-results>
    <ais-pagination>
      <template slot-scope="{ value, active }">
        <div :class="{ 'ais-pagination__link--active': active }">
          {{ value }}
        </div>
      </template>
    </ais-pagination>
    <ais-stats class="text-12 text-center mt-20">
      <template slot-scope="{ totalResults, resultStart, resultEnd }">
        Résultats <strong>{{ resultStart }}</strong> à <strong>{{ resultEnd }}</strong> / <strong>{{ totalResults }}</strong> total.
      </template>
    </ais-stats>
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
