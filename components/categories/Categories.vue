<template>
  <div class="bg-green-lightest py-5">
    <div class="container h-full flex items-center px-20">
      <ul class="list-reset w-full flex flex-wrap justify-between -mx-10">
        <li
          v-for="category in categories"
          :key="category.slug">
          <nuxt-link
            :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
            class="link-category">
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

