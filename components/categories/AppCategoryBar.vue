<template>
  <div class="bg-green-200 py-5">
    <div class="container h-full flex items-center px-20">
      <ul class="w-full flex flex-col md:flex-row flex-wrap justify-center xl:justify-between items-center -mx-10">
        <li
          v-for="category in categories"
          :key="category.slug"
        >
          <nuxt-link
            :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
            :class="`hover:text-${shopTheme}-500`"
            class="block no-underline text-16 xl:text-14 text-center transition-color transition-faster outline-none focus:shadow-outline rounded-lg px-30 xl:px-12 py-16 xl:py-10"
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
