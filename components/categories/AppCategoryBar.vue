<template>
  <div class="bg-green-200 py-5">
    <div class="container h-full flex items-center px-20">
      <ul class="w-full flex flex-wrap md:justify-center xl:justify-between -mx-10">
        <li
          v-for="category in categories"
          :key="category.slug"
          class="w-1/2 md:w-auto"
        >
          <nuxt-link
            :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
            :class="`hover:text-${shopTheme}-500`"
            class="block h-full no-underline text-12 sm:text-14 text-center transition-color transition-faster outline-none focus:shadow-outline rounded-lg px-20 xl:px-12 py-12 xl:py-10 flex justify-center items-center"
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
      locale: 'locale'
    })
  }
}
</script>
