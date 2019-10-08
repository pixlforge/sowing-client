<template>
  <nuxt-link
    :to="{ name: 'search' }"
    :title="$t('aria.links.search')"
    :aria-label="$t('aria.links.search')"
    :class="`bg-${shopTheme}-500 hover:bg-${shopTheme}-700`"
    class="block relative w-40 h-40 outline-none focus:shadow-outline rounded-full transition-color transition-faster text-white flex justify-center items-center"
  >
    <font-awesome-icon
      :icon="['far', 'search']"
      class="text-18"
    />
  </nuxt-link>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming]
}
</script>
