<template>
  <div class="rounded-lg shadow-lg">
    <img
      :alt="alt"
      :src="imgSrc"
      class="block w-full rounded-t-lg">

    <div class="flex flex-col flex-grow p-20">
      <h5 class="text-green-darkest font-bold text-24 text-center">{{ subcategory.name[locale] }}</h5>
      
      <p class="text-16 font-semibold text-grey-lighter text-center leading-tight my-15">
        {{ subcategory.description[locale] }}
      </p>
      
      <nuxt-link
        :to="localePath({
          name: 'categories-category-subcategory-slug',
          params: {
            category: category.slug,
            slug: subcategory.slug
          }
        })"
        class="block text-16 text-green font-semibold text-center no-underline hover:underline p-5 mt-auto">
        {{ $t("components.category.link.see_all") }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    category: {
      type: Object,
      required: true
    },
    subcategory: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    alt() {
      return this.$t("components.category.img.alt");
    },
    imgSrc() {
      return require("@/assets/img/placeholders/category.svg");
    }
  }
};
</script>
