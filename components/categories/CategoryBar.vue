<template>
  <div class="bg-green-200 py-5">
    <div class="container h-full flex items-center px-20">
      <ul
        class="w-full flex flex-wrap md:justify-center xl:justify-between -mx-10"
      >
        <li
          v-for="category in categories"
          :key="category.slug"
          class="w-1/2 md:w-auto"
        >
          <nuxt-link
            :to="{
              name: 'categories-slug',
              params: {
                slug: category.slug,
              },
            }"
            :class="`hover:text-${shopTheme}-500`"
            class="h-full outline-none focus:shadow-outline rounded-lg flex justify-center items-center text-12 sm:text-14 text-center no-underline transition-colors duration-200 ease-out px-20 xl:px-12 py-12 xl:py-10"
          >
            {{ category.name[locale] }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      shopTheme: 'shop/shopTheme',
      categories: 'categories',
      locale: 'locale',
    }),
  },
}
</script>
