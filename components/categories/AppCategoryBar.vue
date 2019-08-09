<template>
  <div class="bg-green-200 py-5">
    <div class="container h-full flex items-center px-20">
      <ul class="w-full flex flex-wrap justify-between -mx-10">
        <li
          v-for="category in categories"
          :key="category.slug"
        >
          <nuxt-link
            :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
            class="block no-underline text-14 hover:text-green-400 transition-color transition-faster outline-none focus:shadow-outline rounded-lg px-12 py-10"
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
      categories: 'categories',
      locale: 'locale'
    })
  }
}
</script>
