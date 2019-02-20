<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: result.slug } })"
    class="no-underline text-green-darkest">

    <div class="transition bg-green-lightest rounded-lg flex items-center p-20 my-10">
      <font-awesome-icon
        :icon="['fas', 'box-alt']"
        class="text-30 ml-5 mr-40"/>
      <div>
        <h5 class="text-24">
          {{ result.name[locale] }}
        </h5>
        <p class="text-16 leading-normal mt-10">
          {{ result.description[locale] }}
        </p>
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
