<template>
  <nuxt-link
    :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
    class="relative w-315 h-150 sm:h-315 rounded-lg shadow-md flex justify-center items-center no-underline bg-cover bg-center bg-no-repeat mx-10 mt-40 sm:mt-80"
    style="background-image: url(https://bulma.io/images/placeholders/1280x960.png);">
    <h5 class="text-24 font-bold text-white text-center z-10">{{ category.name[locale] }}</h5>
    <div class="absolute w-full h-full rounded-lg bg-black opacity-25"/>
  </nuxt-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};
</script>
