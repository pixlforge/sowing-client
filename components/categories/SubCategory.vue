<template>
  <div class="w-350 rounded-lg shadow-md flex flex-col">
    <div>
      <img
        :alt="alt"
        src="https://bulma.io/images/placeholders/1280x960.png"
        class="rounded-t-lg">
    </div>
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
    }
  }
};
</script>

