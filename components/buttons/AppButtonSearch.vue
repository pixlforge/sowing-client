<template>
  <nuxt-link
    :to="localePath({ name: 'search' })"
    :class="btnTheme"
    :aria-label="$t('aria.links.search')"
    class="block relative w-40 h-40 outline-none focus:shadow-outline rounded-full transition flex justify-center items-center">
    <font-awesome-icon
      :icon="['far', 'search']"
      class="text-18"/>
  </nuxt-link>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming]
}
</script>
