<template>
  <nuxt-link
    :to="localePath({ name: 'shop-slug-details', params: { slug: result.slug } })"
    class="no-underline">
    <div
      :class="`bg-${result.theme} hover:bg-${result.theme}-dark`"
      class="transition rounded-lg flex items-center p-20 my-10">
      <font-awesome-icon
        :icon="['fas', 'store']"
        class="text-30 text-white mr-40"/>
      <div>
        <h5 class="text-24 text-white">
          {{ result.name }}
        </h5>
        <p
          class="text-16 text-white leading-normal mt-10"
          v-html="result.description_short[locale]"/>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
}
</script>
