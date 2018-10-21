<template>
  <div class="bg-green-lightest py-15">
    <div class="container h-full flex items-center">
      <ul class="list-reset w-full flex flex-wrap justify-between">
        <li
          v-for="category in categories"
          :key="category.slug"
          class="mx-10 xl:mx-0">
          <nuxt-link
            :to="{ name: 'categories-slug', params: { slug: category.slug } }"
            class="block no-underline hover:underline text-base font-semibold text-green-darkest">
            {{ category.name }}
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
      categories: "categories"
    })
  }
};
</script>

