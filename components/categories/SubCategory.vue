<template>
  <div class="subcategory__body">
    <img
      :alt="alt"
      :src="imgSrc"
      class="subcategory__image">

    <div class="subcategory__content">
      <h5 class="subcategory__name">
        {{ subcategory.name[locale] }}
      </h5>
      
      <p class="subcategory__description">
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
        class="subcategory__link">
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
