<template>
  <div class="category-bar__background">
    <div class="category-bar__container container">
      <ul class="category-bar__list">
        <li
          v-for="category in categories"
          :key="category.slug">
          <nuxt-link
            :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
            class="category-bar__link">
            {{ category.name[locale] }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categories: "categories",
      locale: "locale"
    })
  }
};
</script>
